# Portfolio Design

This is a personal portfolio site built with Next.js and Tailwind CSS. It includes sections for a hero, about, resume, skills, projects, and contact.

## Features

- Responsive portfolio layout
- Downloadable resume (`public/pdf/NehaResumeOct.pdf`)
- Contact form that posts to a server API (`/api/contact`)
- Framer Motion animations and simple UI components

## Local Development

1. Install dependencies:

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

## Notes

- The contact API uses Nodemailer and requires SMTP credentials set in `.env.local` (see `app/api/contact/route.ts`).
- Keep sensitive credentials out of version control.

## License

This repository is private. Update the README with license details if you plan to make it 
public.
