'use client';
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* <!-- Back to top area start here --> */}
      <div className="scroll-up">
        <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <footer>
        {/* <!-- Footer area start here --> */}
        <footer className="footer-area bg-image" data-background="assets/images/footer/footer-bg.jpg">
          <div className="container">
            <div className="footer__wrp pt-65 pb-65 bor-top bor-bottom">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".1s">
                  <div className="footer__item">
                    <h4 className="footer-title">Customer Service</h4>
                    <ul>
                      <li>
                        <a href="contact.html">
                          <span></span>Help Portal
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <span></span>Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          <span></span>Delivery Information
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          <span></span>Click and Collect
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          <span></span>Refunds and Returns
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                  <div className="footer__item">
                    <h4 className="footer-title">Get to Know Us</h4>
                    <ul>
                      <li>
                        <a href="about.html">
                          <span></span>About Us
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          <span></span>News & Blog
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          <span></span>Careers
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          <span></span>Investors
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <span></span>Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s">
                  <div className="footer__item">
                    <h4 className="footer-title">vapes new collections</h4>
                    <ul>
                      <li>
                        <a href="shop.html">
                          <span></span>E-Cigarettes
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span></span>Vape Pens
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span></span>Pod Systems
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span></span>Disposable Vapes
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span></span>Nicotine Salt Devices
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                  <div className="footer__item newsletter">
                    <h4 className="footer-title">get newsletter</h4>
                    <div className="subscribe">
                      <input type="email" placeholder="Your Email" />
                      <button>
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                    <div className="social-icon mt-40">
                      <a href="#0">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#0">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#0">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#0">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copy-text pt-50 pb-50">
              <div className="logo-wrapper">
                <a href="index.html" className="main__logo">
                  <img src="assets/images/logo/smoke-pluse.svg" alt="brand-logo" />
                </a>
              </div>
              <p>
                &copy; Copyright 2023 &nbsp;
                <a href="#0" className="primary-hover">
                  Smoke Pluse
                </a>
                &nbsp; All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
