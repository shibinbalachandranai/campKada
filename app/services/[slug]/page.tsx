import { notFound } from "next/navigation";
import Image from "next/image";
import { getServiceBySlug, services } from "@/lib/data/services";
import Badge from "@/components/shared/Badge";
import EnquiryFormBase from "@/components/shared/EnquiryFormBase";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service?.name ?? "Experience Not Found" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-sand-light">
          {service.images[0] ? (
            <Image src={service.images[0]} alt={service.name} fill className="object-cover" priority />
          ) : (
            <div className="flex h-full items-center justify-center text-sand">
              <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-bark">{service.name}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Badge variant={service.difficulty}>
                {service.difficulty.charAt(0).toUpperCase() + service.difficulty.slice(1)}
              </Badge>
              <Badge variant="duration">{service.duration}</Badge>
            </div>
          </div>

          <p className="text-bark/70 leading-relaxed">{service.description}</p>

          {service.highlights && service.highlights.length > 0 && (
            <div>
              <h3 className="font-semibold text-bark mb-3">Highlights</h3>
              <ul className="flex flex-col gap-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-bark/70">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-sand/60 pt-6">
            <h2 className="text-lg font-semibold text-bark mb-4">Book This Experience</h2>
            <EnquiryFormBase type="service" item={service.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
