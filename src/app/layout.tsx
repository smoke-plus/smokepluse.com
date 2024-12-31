import type { Metadata } from 'next';
import BootstrapClient from 'src/vendors/BootstrapClient';
import Header from 'src/components/Header/Header';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'src/theme/globals.scss';
import Footer from 'src/components/Footer/Footer';
import LoadScripts from 'src/vendors/LoadScripts';

export const metadata: Metadata = {
  title: 'hellowwworld',
  description: `A Portfolio ctrated by Harsh Rana, 
  For Describe the Web Development skill and Experience in IT industry, 
  Adding some Personal information and Hobbies, And Contact Information`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html className="dark" lang="en">
        <Head>
          <link rel="icon" href="/icon/favicon.svg" />
          {/* You can add more meta tags or links here */}
        </Head>
        <body className="hw-dark-active">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="page-wrapper">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </body>
        <BootstrapClient />
        <LoadScripts />
      </html>
    </>
  );
}
