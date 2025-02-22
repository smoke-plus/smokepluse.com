import React from 'react';
import ProductList from 'src/components/ProductList/ProductList';

const Cigar = () => {
  return (
    <>
      {/* <!-- Product area start here --> */}
      <section className="product-area pt-30 pb-130 mt-130">
        <div className="container">
          <div className="product__wrp pb-30 mb-65 bor-bottom d-flex flex-wrap align-items-center justify-content-xl-between justify-content-center">
            <div className="section-header d-flex align-items-center wow fadeInUp" data-wow-delay=".1s">
              <span className="title-icon mr-10"></span>
              <h2>Products</h2>
            </div>
          </div>

          <ProductList></ProductList>
        </div>
      </section>
      {/* <!-- Product area end here --> */}
    </>
  );
};

export default Cigar;
