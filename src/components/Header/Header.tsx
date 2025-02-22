'use client';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header-section main-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-wrapper">
              <a href="index.html" className="main__logo">
                <img src="assets/images/logo/smoke-pluse.svg" alt="brand-logo" />
              </a>
            </div>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="main-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              {/* <li>
                <a href="/hookka">Hookka</a>
              </li>
              <li>
                <a href="/pipe">Pipe</a>
                <ul className="sub-menu">
                  <li className="subtwohober">
                    <a href="shop.html"> Shop Leftbar </a>
                  </li>
                  <li className="subtwohober">
                    <a href="shop-2.html"> Shop Rightbar </a>
                  </li>
                  <li className="subtwohober">
                    <a href="shop-single.html"> Shop Single </a>
                  </li>
                  <li className="subtwohober">
                    <a href="cart.html"> Cart Page </a>
                  </li>
                  <li className="subtwohober">
                    <a href="checkout.html"> Checkout Page </a>
                  </li>
                  <li className="subtwohober">
                    <a href="register.html"> Register </a>
                  </li>
                  <li className="subtwohober">
                    <a href="login.html"> Login </a>
                  </li>
                  <li className="subtwohober">
                    <a href="error.html"> 404 Error </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/e-cigarate">E-Cigarate (vape)</a>
              </li>
              <li>
                <a href="/smoke-accessories">Smoke Accessories</a>
              </li> */}
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <!-- Preloader area start --> */}
      <div className="loading">
        <span className="text-capitalize">L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div id="preloader"></div>
      {/* <!-- Preloader area end --> */}
      {/* <!-- Mouse cursor area start here --> */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      {/* <!-- Mouse cursor area end here --> */}
    </>
  );
};

export default Header;
