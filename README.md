# iPlay Website

Modern, animated, responsive website for the iPlay audio/video player. Built with Next.js App Router, TypeScript, Framer Motion and Lucide icons.

## Included
- Animated landing page with blurred ambient background and glassmorphism
- Feature sections, app preview, responsive navigation and footer
- Dedicated `/privacy` and `/terms` pages
- SEO metadata, Open Graph metadata, robots.txt and sitemap.xml
- iOS CTA and Android “Coming soon” state
- Vercel-ready Next.js project

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before publishing
1. Replace `https://www.iplay.app` with your actual domain in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` or set `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.
2. Replace the generic App Store link in `app/components.tsx` with your official iOS App Store product URL.
3. Replace `support@iplay.app`, `privacy@iplay.app`, and `legal@iplay.app` with monitored email addresses.
4. Review the Privacy Policy against actual SDKs, analytics, permissions, file handling, account/login, and data retention. Have Terms reviewed for your jurisdiction. The included legal pages are starter templates, not legal advice.
5. Update title/description and social sharing preview if you settle on a different brand tagline.

## Deploy to Vercel
- Push this folder to a GitHub repository.
- In Vercel, import the repository and use the default Next.js settings.
- Add `NEXT_PUBLIC_SITE_URL` with your real HTTPS domain.
- Connect your domain in Vercel and set the DNS records it provides.
- Add the domain to Google Search Console and submit `https://your-domain.com/sitemap.xml`.
- Request indexing for the homepage and legal pages. Search ranking is not guaranteed by metadata alone.

## Note
The user mentioned a reference PDF, but no PDF was attached in the current conversation when this starter was prepared. This project follows the written brief and a similar modern media-player landing-page direction; it does not copy Playit's proprietary branding or text.
