"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface EnquiryFormBaseProps {
  type: "shop" | "rental" | "service" | "general";
  item?: string;
  compact?: boolean;
}

export default function EnquiryFormBase({ type, item, compact = false }: EnquiryFormBaseProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [rentalFields, setRentalFields] = useState({ rental_start: "", rental_end: "", group_size: "" });
  const [serviceFields, setServiceFields] = useState({ preferred_date: "", group_size: "", experience_level: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function resetForm() {
    setForm({ name: "", email: "", phone: "", message: "" });
    setRentalFields({ rental_start: "", rental_end: "", group_size: "" });
    setServiceFields({ preferred_date: "", group_size: "", experience_level: "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Honeypot check
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem("website") as HTMLInputElement;
    if (honeypot?.value) return;

    try {
      let details: Record<string, string | number> | undefined;
      if (type === "rental") {
        details = {
          rental_start: rentalFields.rental_start,
          rental_end: rentalFields.rental_end,
          ...(rentalFields.group_size ? { group_size: Number(rentalFields.group_size) } : {}),
        };
      } else if (type === "service") {
        details = {
          preferred_date: serviceFields.preferred_date,
          ...(serviceFields.group_size ? { group_size: Number(serviceFields.group_size) } : {}),
          ...(serviceFields.experience_level ? { experience_level: serviceFields.experience_level } : {}),
        };
      }

      const payload = {
        ...form,
        type,
        ...(item ? { item } : {}),
        ...(details ? { details } : {}),
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.errors?.formErrors?.[0] ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = cn(
    "w-full rounded-lg border border-sand bg-white px-3 text-sm text-bark placeholder-bark/40 outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition",
    compact ? "py-1.5" : "py-2.5"
  );
  const labelClass = "block text-sm font-medium text-bark mb-1";

  if (submitted) {
    return (
      <div className="rounded-xl bg-forest/10 border border-forest/20 px-6 py-8 text-center">
        <svg className="mx-auto h-10 w-10 text-forest mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-semibold text-forest text-lg">Enquiry Received!</h3>
        <p className="mt-1 text-sm text-bark/70">We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-forest underline underline-offset-2 hover:text-forest-light"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col", compact ? "gap-3" : "gap-4")}>
      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" minLength={10} pattern="[0-9+\s\-]{10,}" title="Phone number must be at least 10 digits" className={inputClass} />
      </div>

      {/* Rental-specific fields */}
      {type === "rental" && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="rental_start" className={labelClass}>Rental Start Date *</label>
              <input id="rental_start" type="date" required value={rentalFields.rental_start} onChange={e => setRentalFields(p => ({ ...p, rental_start: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label htmlFor="rental_end" className={labelClass}>Rental End Date *</label>
              <input id="rental_end" type="date" required value={rentalFields.rental_end} onChange={e => setRentalFields(p => ({ ...p, rental_end: e.target.value }))} className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="group_size" className={labelClass}>Group Size</label>
            <input id="group_size" type="number" min={1} max={20} placeholder="1" value={rentalFields.group_size} onChange={e => setRentalFields(p => ({ ...p, group_size: e.target.value }))} className={inputClass} />
          </div>
        </>
      )}

      {/* Service-specific fields */}
      {type === "service" && (
        <>
          <div>
            <label htmlFor="preferred_date" className={labelClass}>Preferred Date *</label>
            <input id="preferred_date" type="date" required value={serviceFields.preferred_date} onChange={e => setServiceFields(p => ({ ...p, preferred_date: e.target.value }))} className={inputClass} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="svc_group_size" className={labelClass}>Group Size</label>
              <input id="svc_group_size" type="number" min={1} max={20} placeholder="1" value={serviceFields.group_size} onChange={e => setServiceFields(p => ({ ...p, group_size: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label htmlFor="experience_level" className={labelClass}>Experience Level</label>
              <select id="experience_level" value={serviceFields.experience_level} onChange={e => setServiceFields(p => ({ ...p, experience_level: e.target.value }))} className={inputClass}>
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" rows={compact ? 3 : 4} value={form.message} onChange={handleChange} placeholder="Any questions or special requirements?" className={cn(inputClass, "resize-none")} />
      </div>

      {error && <p className="rounded-lg bg-bark/10 px-3 py-2 text-sm text-bark">{error}</p>}

      <button type="submit" disabled={loading} className="rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-light disabled:opacity-60 transition-colors">
        {loading ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
