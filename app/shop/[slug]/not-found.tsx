import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h2 className="text-2xl font-bold text-bark">Product Not Found</h2>
      <p className="text-bark/60">This product doesn&apos;t exist or may have been removed.</p>
      <Link href="/shop" className="rounded-lg bg-forest px-6 py-2 text-white hover:bg-forest-light transition-colors text-sm font-semibold">
        Back to Shop
      </Link>
    </div>
  );
}
