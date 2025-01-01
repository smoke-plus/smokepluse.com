import type { Metadata } from 'next';
import BootstrapClient from 'src/vendors/BootstrapClient';
import Header from 'src/components/Header/Header';
import Head from 'next/head';
import Footer from 'src/components/Footer/Footer';
import LoadScripts from 'src/vendors/LoadScripts';
import 'src/theme/globals.scss';

export const metadata: Metadata = {
  title: 'Smoke Pluse',
  description: `A Smoke shop Informative website`,
  icons: {
    icon: 'assets/images/logo/Favicon.svg', // Path to your favicon
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" className="smoke-pluse-wrapper">
        <Head>
          <link rel="icon" href="" />
          {/* You can add more meta tags or links here */}
        </Head>
        <body>
          <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
        <BootstrapClient />
        <LoadScripts />
      </html>
    </>
  );
}
