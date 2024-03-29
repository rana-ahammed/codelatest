import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from '@/components/Providers';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeLatest',
  description: 'CodeLatest is a programming blog website',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#4285f4',
};

export const revalidate = 3600;

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading...</p>,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthProvider>
          <div className="lg:max-w-[900px] lg:px-16 mx-auto py-8 shadow-xl min-h-screen flex flex-col px-8">
            <DynamicNavbar />
            <div className="flex-auto">{children}</div>
            <DynamicFooter />
          </div>
          <Toaster />
        </NextAuthProvider>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
        />
      </body>
    </html>
  );
}
