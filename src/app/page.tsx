import Dashboard from '@/components/dashboard';
import { SessionProvider } from 'next-auth/react';


export default function Home() {
  return (
    <SessionProvider>
      <main>
        <Dashboard/>
      </main>
    </SessionProvider>
  );
} 

