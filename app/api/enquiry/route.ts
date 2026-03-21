import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format");
const groupSize = z.coerce.number().int().positive().optional();

const enquirySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("shop"),
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
    item: z.string().optional(),
    details: z.object({ preferred_date: isoDate.optional() }).optional(),
    message: z.string().optional(),
  }),
  z.object({
    type: z.literal("rental"),
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
    item: z.string().optional(),
    details: z.object({
      rental_start: isoDate,
      rental_end: isoDate,
      group_size: groupSize,
    }).optional(),
    message: z.string().optional(),
  }),
  z.object({
    type: z.literal("service"),
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
    item: z.string().optional(),
    details: z.object({
      preferred_date: isoDate,
      group_size: groupSize,
      experience_level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    }).optional(),
    message: z.string().optional(),
  }),
  z.object({
    type: z.literal("general"),
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
    item: z.string().optional(),
    details: z.object({}).optional(),
    message: z.string().optional(),
  }),
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot — reject if the hidden field is populated (bot)
    if (body.website) {
      return NextResponse.json({ success: true, id: "bot" }, { status: 201 });
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await connectDB();
    const enquiry = await Enquiry.create(parsed.data);

    sendNotification(parsed.data).catch((err) =>
      console.error("Notification failed:", err)
    );

    return NextResponse.json(
      { success: true, id: enquiry._id.toString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("Enquiry POST error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function sendNotification(data: z.infer<typeof enquirySchema>) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `New ${data.type} enquiry from *${data.name}* (${data.email})${data.item ? ` for *${data.item}*` : ""}`,
    }),
  });
}
