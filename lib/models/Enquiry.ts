import mongoose, { Schema, Document } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone?: string;
  type: "shop" | "rental" | "service" | "general";
  item?: string;
  details?: Record<string, unknown>;
  message?: string;
  status: "new" | "contacted" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    type: {
      type: String,
      enum: ["shop", "rental", "service", "general"],
      required: true,
    },
    item: { type: String },
    details: { type: Schema.Types.Mixed },
    message: { type: String },
    status: {
      type: String,
      enum: ["new", "contacted", "resolved"],
      default: "new",
    },
  },
  { timestamps: true }
);

EnquirySchema.index({ email: 1 });
EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ status: 1 }, { sparse: true });

export default mongoose.models.Enquiry ||
  mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
