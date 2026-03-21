# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CampKada** is an outdoor lifestyle e-commerce website with three service lines: gear sales (Shop), gear rentals (Rentals), and guided experiences (Services). Phase 1 is browse + enquiry forms with manual follow-up — no cart or payment.

**Phased roadmap:**
- **Phase 1 (current):** Browse + enquiry forms, manual follow-up, MongoDB for enquiry storage
- **Phase 2:** Cart + order placement, offline processing
- **Phase 3:** Payment gateway (Stripe/Razorpay) + full automation

## Tech Stack

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS, Inter font
- **Backend:** Next.js API routes + MongoDB (Mongoose) + Zod validation
- **Deployment:** Vercel + MongoDB Atlas

## Commands

Once the project is initialized (not yet done):

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # ESLint
```

## Environment Variables

Copy `.env.local.example` to `.env.local` (never commit `.env.local`):

```
MONGODB_URI=           # MongoDB Atlas connection string
NOTIFICATION_EMAIL=    # Email for enquiry notifications
SLACK_WEBHOOK_URL=     # Optional Slack webhook
```

## Architecture

### Key Patterns

**MongoDB singleton** (`lib/mongodb.ts`): Uses the official Next.js pattern — `global._mongoClientPromise` in dev (preserves connection across HMR), module-level in prod. Every API route imports from this singleton.

**Single enquiry endpoint** (`app/api/enquiry/route.ts`): All form submissions from all sections converge here. Zod validates the body — `details` keys are whitelisted per `type` to prevent arbitrary payloads. Returns 201 `{ success: true, id }` or 400 with Zod error details.

**`EnquiryFormBase` component** (`components/shared/EnquiryFormBase.tsx`): Shared base for all 4 enquiry form variants. Accepts `type`, `item`, `extraFields` (slot for section-specific fields), and `compact` (boolean — condensed layout for modal/bottom-sheet). Manages loading/error/success state, calls `POST /api/enquiry`, shows `SuccessToast` on success.

**`ItemCard` component** (`components/shared/ItemCard.tsx`): Single card for all sections — no separate ProductCard/RentalCard/ServiceCard. Uses `variant: "shop" | "rental" | "service"` to show the correct metadata:
- `"shop"`: price, stock badge
- `"rental"`: price-per-day, availability badge
- `"service"`: difficulty badge, duration badge

### Static Data

`lib/data/products.ts`, `rentals.ts`, `services.ts` — 6–8 entries each with stable slug-based IDs. Detail pages (`[slug]/page.tsx`) look up items by slug from these files.

### Tailwind Color Tokens

Defined in `tailwind.config.ts` — use these throughout, never raw hex:
- `forest` — #2D5016 (forest green)
- `bark` — #6B3D1E (bark brown)
- `sand` — sandy beige
- `cream` — off-white

### Enquiry Schema (`lib/models/Enquiry.ts`)

```ts
{ name, email, phone, type: "shop"|"rental"|"service"|"general",
  item, details: Mixed, message, status: "new"|"contacted"|"resolved",
  createdAt, updatedAt }
```
Indexed on `email`, `createdAt`, and `status` (sparse — for "show all new enquiries" queries).

## Critical Files

| File | Why |
|---|---|
| `app/api/enquiry/route.ts` | All form submissions converge here — must be correct before UI testing |
| `lib/models/Enquiry.ts` | Status index must exist before first write |
| `lib/mongodb.ts` | Every API route depends on this — use official Next.js singleton pattern |
| `components/shared/EnquiryFormBase.tsx` | Unblocks all 4 form variants |
| `tailwind.config.ts` | Brand color tokens cascade across every component |

## Phase 2 Compatibility (keep in mind when writing Phase 1 code)

- `EnquiryFormBase` will get an "Add to Cart" sibling button via a new prop — design for extensibility
- `ItemCard` will accept a `showAddToCart` prop — no structural change needed now
- New models (`Product`, `Order`, `Booking`) and pages (`app/cart/`, `app/checkout/`) will be added
- The `Enquiry` collection and `/api/enquiry` route remain intact in Phase 2+
