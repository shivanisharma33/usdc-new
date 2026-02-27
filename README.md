# USDC Website (Next.js App Router)

Production-oriented Next.js migration of the USDC React SPA.

## Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Scripts

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run Next.js ESLint checks

## Routing

Routes are implemented in `app/`:

- `/`
- `/about-us`
- `/investors`
- `/insights`
- `/management`
- `/locations`
- `/careers`
- `/contact`
- `/press-release`
- `/press-release/[documentId]`
- `/privacy-policy`
- `/terms-of-service`

## Notes

- Components with Framer Motion or browser APIs are marked with `'use client'`.
- Images use Next Image optimization (`src/components/OptimizedImage.tsx`).
- External image hosts are configured in `next.config.js`.
