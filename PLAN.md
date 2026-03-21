# CampKada — Phase 1 Website Plan

## Context
CampKada is an outdoor lifestyle brand offering three services: gear sales (Shop), gear rentals (Rentals), and guided experiences (Services). The goal is to build a modern, nature-themed website that lets customers browse offerings and submit enquiries. No cart/checkout in Phase 1 — purchases and bookings are handled manually via follow-up.

**Phased roadmap:**
- **Phase 1 (now):** Browse + enquiry forms, manual follow-up, MongoDB for enquiry storage
- **Phase 2:** Cart + order placement, offline processing, no payment gateway
- **Phase 3:** Payment gateway (Stripe/Razorpay) + full automation

---

## Tech Stack
- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** Next.js API routes + MongoDB (Mongoose)
- **Design:** Nature/earthy tones — forest green, warm brown, sandy beige, off-white
- **Font:** Inter

---

## Folder Structure
```
campkada/
├── app/
│   ├── layout.tsx                  # Root layout: Navbar, Footer, fonts, metadata
│   ├── page.tsx                    # Home page
│   ├── globals.css
│   ├── shop/
│   │   ├── page.tsx                # Product grid listing
│   │   └── [slug]/page.tsx         # Product detail + enquiry form
│   ├── rentals/
│   │   ├── page.tsx                # Rental items grid
│   │   └── [slug]/page.tsx         # Rental detail + rental enquiry form
│   ├── services/
│   │   ├── page.tsx                # Experiences/trips grid
│   │   └── [slug]/page.tsx         # Experience detail + booking enquiry form
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── api/enquiry/route.ts        # POST /api/enquiry — saves to MongoDB
│
├── components/
│   ├── layout/                     # Navbar, Footer, MobileMenu
│   ├── home/                       # HeroSection, FeatureHighlights, OfferingsOverview, AboutSnippet, Testimonials, CtaBanner
│   ├── shop/                       # ProductGrid, ProductDetail, ShopEnquiryForm
│   ├── rentals/                    # RentalGrid, RentalDetail, RentalEnquiryForm
│   ├── services/                   # ServiceGrid, ServiceDetail, BookingEnquiryForm
│   └── shared/                     # EnquiryFormBase, ItemCard, SectionHeading, Badge, SuccessToast
│                                   # ItemCard accepts variant: "shop" | "rental" | "service" — single card component for all sections
│
├── lib/
│   ├── mongodb.ts                  # Connection singleton (caches across serverless invocations)
│   ├── models/Enquiry.ts           # Mongoose schema
│   └── data/                       # products.ts, rentals.ts, services.ts (static seed data)
│
├── types/index.ts                  # Shared TS interfaces (// TODO Phase 2: split by domain)
├── public/images/                  # hero/, products/, rentals/, services/
├── tailwind.config.ts              # Custom color tokens: forest, bark, sand, cream
├── .env.local                      # MONGODB_URI, NOTIFICATION_EMAIL (gitignored)
└── .env.local.example              # Committed — documents all required env vars
```

---

## MongoDB Schema — Enquiry
```ts
{
  name:      String   // required
  email:     String   // required, validated
  phone:     String   // optional
  type:      "shop" | "rental" | "service" | "general"  // required
  item:      String   // product/rental/experience name
  details:   Mixed    // flexible per type:
             //   rental:  { rental_start: Date, rental_end: Date, group_size: Number }
             //   service: { preferred_date: Date, group_size: Number, experience_level: "beginner" | "intermediate" | "advanced" }
             //   shop:    { preferred_date: Date }
             //   general: {}
  message:   String   // optional
  status:    "new" | "contacted" | "resolved"  // default: "new"
  createdAt: Date
  updatedAt: Date
}
```
Indexed on `email`, `createdAt`, and `status` (sparse index — enables "show all new enquiries" queries without full collection scan).

---

## API Route — POST /api/enquiry
Validation via **Zod** — defines the schema, provides TypeScript types, rejects malformed payloads before touching MongoDB.

1. Parse body with Zod schema (name, email required; type enum; `details` keys whitelisted per type — no arbitrary payloads)
2. Return 400 with Zod error details if validation fails
3. Connect via `lib/mongodb.ts` singleton (official Next.js pattern — `global._mongoClientPromise` in dev, module-level in prod)
4. Save `Enquiry` document
5. Send notification email/Slack webhook (fire-and-forget — log error but do not fail the request)
6. Return 201 `{ success: true, id: "..." }`
7. Catch-all 500 for DB errors

**Deferred:** Rate limiting (Upstash) — add in Phase 2 pre-launch hardening once there is real traffic.

---

## Key Shared Component: EnquiryFormBase
- Fields: name, email, phone, message
- Accepts props: `type`, `item`, `extraFields` (slot for section-specific fields), `compact` (boolean)
  - `compact=false` (default): full-page/section form
  - `compact=true`: condensed layout for use inside a modal or bottom-sheet (e.g. "Quick Enquire" on listing pages)
- Calls `POST /api/enquiry`, manages loading/error/success state
- On success: shows `SuccessToast`, resets form
- Used by all 4 form variants (shop, rental, service, contact)

## Key Shared Component: ItemCard
- Single card component for all sections — no separate ProductCard/RentalCard/ServiceCard
- Accepts `variant: "shop" | "rental" | "service"` prop to adjust displayed metadata:
  - `"shop"`: price, stock badge
  - `"rental"`: price-per-day, availability badge
  - `"service"`: difficulty badge, duration badge
- `Badge` component covers: stock, availability, difficulty (beginner/intermediate/advanced), duration — used by ItemCard and detail pages

---

## Implementation Order
1. **Project init** — `create-next-app`, Tailwind config with color tokens, `.env.local`, `.env.local.example` (committed)
2. **Backend first** — `lib/mongodb.ts` (official singleton pattern), `lib/models/Enquiry.ts` (with status index), install Zod, `app/api/enquiry/route.ts` (Zod validation + notification), test with REST client
3. **Static data** — 6–8 entries each in `products.ts`, `rentals.ts`, `services.ts`; each item has a stable slug-based `_id`
4. **Layout shell** — Navbar (responsive), Footer, wire into `layout.tsx`; add `app/loading.tsx` and `app/error.tsx` stubs here
5. **Shared components** — `ItemCard` (with variant prop), `EnquiryFormBase`, `SectionHeading`, `Badge`, `SuccessToast`
6. **Home page** — Hero, FeatureHighlights, OfferingsOverview (3 cards → Shop/Rentals/Services), AboutSnippet, Testimonials, CtaBanner
7. **Shop section** — listing page → detail page → enquiry form → end-to-end test
8. **Rentals section** — same pattern + date picker fields
9. **Services section** — same pattern + difficulty/duration badges
10. **About & Contact pages**
11. **Polish** — responsive QA (375/768/1280px), per-route `loading.tsx`/`not-found.tsx`, meta/OG tags
12. **Deploy** — Vercel, set all env vars (MONGODB_URI, NOTIFICATION_EMAIL/SLACK_WEBHOOK_URL), verify image domains in `next.config.ts`

---

## Phase 2 Migration Notes (no changes needed in Phase 1 code)
- `EnquiryFormBase` gets a sibling "Add to Cart" button via a new prop — no rewrite
- `ItemCard`/`ProductCard` accept a new `showAddToCart` prop — no structural change
- New models: `Product`, `Order`, `Booking` in `lib/models/`
- New pages: `app/cart/page.tsx`, `app/checkout/page.tsx`
- `Enquiry` collection and `/api/enquiry` route stay intact for service/general enquiries

## Phase 3 Migration Notes
- Add Stripe/Razorpay SDK, `POST /api/payment/create-intent`, webhook handler
- `Order` model gains `paymentStatus`, `paymentIntentId`, `paidAt` fields (additive)
- Guided services can remain on the enquiry flow (human coordination needed)

---

## Critical Files
| File | Why critical |
|---|---|
| `app/api/enquiry/route.ts` | All form submissions converge here; Zod validation + notification must be correct before UI testing |
| `lib/models/Enquiry.ts` | Schema + indexes; must include `status` index before first write |
| `lib/mongodb.ts` | Every API route depends on correct singleton — use official Next.js pattern |
| `components/shared/EnquiryFormBase.tsx` | Unblocks all 4 form variants simultaneously |
| `tailwind.config.ts` | Brand color tokens cascade across every component |
| `.env.local.example` | Documents all required env vars; commit this, never commit `.env.local` |

---

## Verification
- Submit test enquiry from each form type (shop/rental/service/general) → confirm MongoDB documents with correct `type`, `item`, `details`, `status: "new"`
- Send malformed payload (missing name, invalid email, unknown `details` key) → confirm Zod 400 response + UI error messages
- Confirm notification email/Slack message is received on each test submission
- Test responsive layout at 375px, 768px, 1280px
- Navigate all `[slug]` routes with valid and invalid slugs (confirm `not-found.tsx` renders)
- Deploy to Vercel staging → set all env vars, repeat full enquiry flow with production MongoDB Atlas connection

## Deferred to Phase 2
- Rate limiting (Upstash) — add pre-launch once there is real traffic
- Typed Mongoose sub-schemas for `details` — Zod validation is sufficient for Phase 1
- SEO `generateMetadata` per page — no domain authority to leverage yet
- Image CDN (Cloudinary/Vercel Blob) — revisit when catalog exceeds 30 items
