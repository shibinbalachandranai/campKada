import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import EnquiryFormBase from "@/components/shared/EnquiryFormBase";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Info */}
        <div>
          <SectionHeading
            title="Get in Touch"
            subtitle="Questions, custom enquiries, or just want to know if your gear is ready — we're here."
            className="mb-8"
          />
          <div className="flex flex-col gap-6 text-bark/70">
            <div>
              <h3 className="font-semibold text-bark mb-1">Email Us</h3>
              <a href="mailto:contact@campkada.com" className="text-sm text-forest hover:underline">
                contact@campkada.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-bark mb-1">Response Time</h3>
              <p className="text-sm">We reply to all enquiries within 24 hours on business days.</p>
            </div>
            <div>
              <h3 className="font-semibold text-bark mb-1">Based In</h3>
              <p className="text-sm">Kochi, Kerala — serving adventurers across India.</p>
            </div>
            <div>
              <h3 className="font-semibold text-bark mb-1">For Custom Trips</h3>
              <p className="text-sm">
                Need a custom itinerary or a large group booking? Drop us a message and we'll craft something just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand/60 md:p-8">
          <h2 className="text-lg font-semibold text-bark mb-6">Send a Message</h2>
          <EnquiryFormBase type="general" />
        </div>
      </div>
    </div>
  );
}
