import React from 'react';

const Cigar = () => {
  return (
    <>
      {/* <!-- Product area start here --> */}
      <section className="product-area pt-130 pb-130 mt-130">
        <div className="container">
          <div className="product__wrp pb-30 mb-65 bor-bottom d-flex flex-wrap align-items-center justify-content-xl-between justify-content-center">
            <div className="section-header d-flex align-items-center wow fadeInUp" data-wow-delay=".1s">
              <span className="title-icon mr-10"></span>
              <h2>latest arrival products</h2>
            </div>
            <ul className="nav nav-pills mt-4 mt-xl-0">
              <li className="nav-item wow fadeInUp" data-wow-delay=".1s">
                <a href="#latest-item" data-bs-toggle="tab" className="nav-link px-4 active">
                  latest item
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                <a href="#top-ratting" data-bs-toggle="tab" className="nav-link px-4 bor-left bor-right">
                  top ratting
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                <a href="#featured-products" data-bs-toggle="tab" className="nav-link ps-4">
                  featured products
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div id="latest-item" className="tab-pane fade show active">
              <div className="row g-4">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image1.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image3.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Menthol E-Cigarette Kit
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image2.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Disposable Sub-Ohm Tank
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image3.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image5.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          POP Extra Strawberry
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image4.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image6.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Battery And Charger Kit
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image5.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image3.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Pods Sold Separately
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image6.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          GeekVape Obelisk Pod
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image7.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          POP Extra Strawberry
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image8.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          100ml Nic Salt Juice
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div id="top-ratting" className="tab-pane fade">
              <div className="row g-4">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image4.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image6.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Battery And Charger Kit
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image5.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image3.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Pods Sold Separately
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image6.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          GeekVape Obelisk Pod
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image7.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          POP Extra Strawberry
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image8.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          100ml Nic Salt Juice
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div id="featured-products" className="tab-pane fade">
              <div className="row g-4">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image1.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image3.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Menthol E-Cigarette Kit
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image2.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          Disposable Sub-Ohm Tank
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image3.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image5.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          POP Extra Strawberry
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image7.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          POP Extra Strawberry
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="product__item bor">
                    <a href="#0" className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                    <a href="shop-single.html" className="product__image pt-20 d-block">
                      <img className="font-image" src="assets/images/product/product-image8.png" alt="image" />
                      <img className="back-image" src="assets/images/product/product-image4.png" alt="image" />
                    </a>
                    <div className="product__content">
                      <h4 className="mb-15">
                        <a className="primary-hover" href="shop-single.html">
                          100ml Nic Salt Juice
                        </a>
                      </h4>
                      <del>$74.50</del>
                      <span className="primary-color ml-10">$49.50</span>
                      <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product area end here --> */}
    </>
  );
};

export default Cigar;
