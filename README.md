# Antares Operations Team Intraweb Apps Manager

Minimal Next.js 14 (App Router) landing page and internal login flow for Vercel deployment.

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` based on `.env.example` and set credentials.
3. Run development server:
   ```bash
   npm run dev
   ```

## Environment variables

```env
ADMIN_USER=internal_admin
ADMIN_PASSWORD=change-this-password
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. In **Project Settings → Environment Variables**, add `ADMIN_USER` and `ADMIN_PASSWORD`.
4. Deploy.

The login endpoint validates credentials on the server and sets an `httpOnly` session cookie before redirecting to `/dashboard`.
