# kaisa-site (Next.js)

## Setup (exactly like you asked)
```bash
npx create-next-app@latest kaisa-site --ts --app
cd kaisa-site
```

This repo already contains the finished files. Just:
```bash
npm install
npm run dev
```

## Password
This site is protected by a simple password gate (middleware + httpOnly cookie).

### Local
Create `.env.local`:
```
SITE_PASSWORD=your-password-here
```

### Vercel
Project Settings → Environment Variables:
- Name: `SITE_PASSWORD`
- Value: your password
- Redeploy

Login page is `/login`. Logout is `/logout`.

## Replace media
Put your files into `public/media/`:
- `hero.gif`
- `us-1.jpg` ... `us-4.jpg`
