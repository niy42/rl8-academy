# RL8 Academy

The official RL8 Academy marketing and first-cohort landing page.

**Learn. Build. Grow.**

## Stack
- Vite
- React + TypeScript
- Tailwind CSS v4 (Vite plugin)
- Lucide React

## Getting started
```bash
npm install
cp .env.example .env
npm run dev
```

## WhatsApp enquiries
Set `VITE_WHATSAPP_NUMBER` in your local `.env` file to the academy's WhatsApp number in international format, digits only (for example, `2348012345678`). Until configured, enquiry links point to the contact section rather than opening an invalid number.

## Scripts
- `npm run dev` — local development
- `npm run build` — type-check and production build
- `npm run preview` — preview production output
- `npm run lint` — lint source files

## Deployment
The site is a static Vite application and can be deployed to Cloudflare Pages. Build command: `npm run build`. Build output directory: `dist`.

## Before public launch
- Add the official academy logo and favicon assets.
- Configure the academy WhatsApp number.
- Confirm course schedule, duration, fee, and cohort details before publishing them.
- Add a real lead-capture destination if a form is introduced.
- Configure the final domain and social preview image.
