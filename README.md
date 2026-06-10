# Ethiopian Aviation Cafe — Digital Menu

A modern, mobile-first QR-code restaurant menu built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- 📱 Mobile-first responsive design
- 🔍 Search and category filtering
- 🎨 Luxury marble theme with red brand accents
- 🌙 Dark mode toggle
- ✨ Smooth Framer Motion animations
- 📲 PWA support (installable on phones)
- 💬 WhatsApp order button
- 📞 Floating call button
- ⭐ Featured items & popular dishes carousel
- 🖼️ Food image gallery
- 🗄️ Admin-ready menu data structure

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment (QR-Code Ready)

Deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any Node.js host:

1. Push the project to GitHub
2. Connect the repo to your hosting provider
3. Deploy — you'll get a URL like `https://your-menu.vercel.app`
4. Generate a QR code pointing to that URL
5. Print and place QR codes on tables

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React UI components
├── data/             # Menu & restaurant data (swap for DB later)
├── hooks/            # Custom React hooks
├── lib/              # Utilities & data access layer
└── types/            # TypeScript types
```

## Updating the Menu

Menu items live in `src/data/menu.ts`. Each item follows the `MenuItem` type in `src/types/menu.ts`.

To connect a database later, update `src/lib/menu-api.ts` to fetch from your API/CMS — the UI components won't need changes.

## Pages

| Route     | Description        |
|-----------|--------------------|
| `/`       | Home / Full Menu   |
| `/about`  | About the cafe     |
| `/contact`| Contact & ordering |

## License

Private — Ethiopian Aviation Cafe
