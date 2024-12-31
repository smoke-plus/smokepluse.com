/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Script from 'next/script';

const LoadScripts = () => {
  return (
    <>
      {/* OTHER GSAP JS */}
      <Script type="text/javascript" src="assets/js/main.js" strategy="afterInteractive" />
    </>
  );
};

export default LoadScripts;
