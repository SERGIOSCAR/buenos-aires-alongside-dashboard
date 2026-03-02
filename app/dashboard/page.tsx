import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createSessionValue, sessionCookieName } from '@/lib/auth';

export default function DashboardPage() {
  const cookieStore = cookies();
  const sessionValue = cookieStore.get(sessionCookieName)?.value;

  if (!sessionValue || sessionValue !== createSessionValue()) {
    redirect('/');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }}
    >
      <h1>Dashboard</h1>
    </main>
  );
}
