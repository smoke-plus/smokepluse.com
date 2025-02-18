'use client';
import React, { useCallback, useEffect, useState } from 'react';

interface Product {
  handleId: string;
  fieldType: string;
  name: string;
  description: string;
  productImageUrl: string[];
  collection: string[];
  sku: string;
  ribbon: string;
  price: string;
  surcharge: string;
  visible: string;
  discountMode: string;
  discountValue: string;
  inventory: string;
  weight: string;
  cost: string;
  productOptions: ProductOption[];
  additionalInfo: AdditionalInfo[];
  customTextFields: CustomTextField[];
  brand: string;
}

interface ProductOption {
  name: string;
  type: string;
  description: string;
}

interface AdditionalInfo {
  title: string;
  description: string;
}

interface CustomTextField {
  field: string;
  charLimit: string;
  mandatory: string;
}

const ProductList = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data: Product[]) => {
        data.map((product) => {
          if ([product.productImageUrl].join('') === '') {
            product.productImageUrl = [''];
          } else {
            product.productImageUrl = [product.productImageUrl].join('').split(';') || '';
          }
          if ([product.collection].join('') === '') {
            product.collection = [''];
          } else {
            product.collection =
              [product.collection]
                .join('')
                .split(/[;,]/)
                .map((item) => item.trim()) || '';
          }
        });

        const collections = data.flatMap((item) =>
          item.collection
            .join('')
            .split(/[;,]/)
            .map((c) => c.trim())
        );

        const uniqueCollections = [...new Set(collections)];
        console.log('uniqueCollections', uniqueCollections);

        setData(data);
      });
  }, []);

  const getImage = useCallback((url: string) => {
    return (
      <>
        {url && url !== '' ? (
          <img className="font-image" src={`https://static.wixstatic.com/media/${url}`} alt="image" />
        ) : (
          <img className="font-image" src={'/assets/images/no-preview.jpg'} alt="NoImagePreview" />
        )}
      </>
    );
  }, []);

  // Update data via API
  //   const updateData = async () => {
  //     const res = await fetch('/api/data', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ name: newName }),
  //     });

  //     const result = await res.json();
  //     setData(result.newData);
  //   };

  return (
    <>
      <div className="row g-4">
        {data ? (
          data.map((product) => {
            return (
              <div key={product.handleId} className="col-xxl-3 col-xl-4 col-md-6">
                <div className="product__item bor h-100">
                  {/* <a href="#0" className="wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </a> */}
                  <a href="shop-single.html" className="product__image pt-20 d-block">
                    {product.productImageUrl.length > 1 ? (
                      <div className="swiper product_thumb">
                        <div className="swiper-wrapper">
                          {product.productImageUrl.map((url) => (
                            <div className="swiper-slide" key={url}>
                              {getImage(url)}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>{getImage(product.productImageUrl[0])}</>
                    )}
                  </a>
                  <div className="product__content">
                    <p className="mb-10">
                      {/* <a className="primary-hover" href="shop-single.html"> */}
                      {product.name}
                      {/* </a> */}
                    </p>
                    {/* {product.discountMode && Number(product.discountValue) > 0 && <del className="mr-10">${product.discountValue}</del>} */}
                    <span className="primary-color ">${product.price}</span>

                    {/* <div className="star mt-20">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div> */}
                  </div>
                  {/* <a className="product__cart d-block bor-top" href="#0">
                        <i className="fa-regular fa-cart-shopping primary-color me-1"></i>
                        <span>Add to cart</span>
                      </a> */}
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
