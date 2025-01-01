/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Script from 'next/script';

const LoadScripts = () => {
  return (
    <>
      <Script type="text/javascript" src="assets/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/wow.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/nice-select.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/pace.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/jquery.waypoints.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/script.js" strategy="afterInteractive" />
      <Script type="text/javascript" src="assets/js/script.js" strategy="afterInteractive" />
    </>
  );
};

export default LoadScripts;
