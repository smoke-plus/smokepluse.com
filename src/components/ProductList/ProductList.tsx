'use client';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

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
  const [uniqueTagNames, setUniqueTagNames] = useState<string[]>([]);
  const [filterData, setFilterData] = useState<Product[] | null>(null);
  const [filterArray, setFilterArray] = useState<string[]>([]);

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
        setUniqueTagNames(
          uniqueCollections.filter((tagname) => {
            /* WIP for Sub tags */

            /* const filteredItems = data.filter((item) => item.collection.includes(tagname));
            let filteredTags;
            if (filteredItems.length > 1) {
              filteredTags = filteredItems.flatMap((item) =>
                item.collection
                  .join('')
                  .split(/[;,]/)
                  .map((c) => c.trim())
              );
              console.log(filteredItems, [...new Set(filteredTags)]);
            } */
            return data.some((item) => item.collection.includes(tagname));
          })
        );

        setData(data);
        setFilterData(data);
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

  const handleFilterUpdate = (e: any, tag: any) => {
    if (e.target.checked) {
      setFilterArray([...filterArray, tag]);
    } else {
      setFilterArray(filterArray.filter((existingItem) => existingItem !== tag));
    }
  };

  useEffect(() => {
    if (filterArray.length > 0 && filterData && data) {
      setFilterData(data.filter((fData) => filterArray.some((tag) => fData.collection.includes(tag))));
    } else {
      setFilterData(data);
    }
  }, [filterArray]);

  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <div className="d-flex align-items-center justify-content-between">
            <p>Total Results</p> <h3>{filterData?.length}</h3>
          </div>
          <hr className="mb-10" />
          {uniqueTagNames.map((tag) => {
            tag = tag.trim();
            if (tag !== '')
              return (
                <div key={tag} className="filter-checkbox" title={tag}>
                  <label htmlFor={tag}>
                    <input className="me-2 mt-1" type="checkbox" id={tag} onChange={(e) => handleFilterUpdate(e, tag)} />
                    {tag}
                  </label>
                </div>
              );
          })}
        </div>
        <div className="col-lg-10">
          <div className="row g-4">
            {filterData ? (
              filterData.map((product) => {
                return (
                  <div key={product.handleId} data-tags={product.collection.join(',')} className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="product__item bor h-100">
                      {/* <a href="#0" className="wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </a> */}
                      <a href="/" className="product__image d-block">
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
                        {/* <span className="primary-color ">${product.price}</span> */}
                        <div className="tags">
                          {product.collection.map((item) => (
                            <span className="badge" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
