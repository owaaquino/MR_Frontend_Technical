import React, { useEffect, useState } from "react";

import Layout from "../layout";

const ProductPage = ({ cartTotal, addProductToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setProductDetail(result);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(true);
          console.log(error);
        }
      );
  }, []);

  const updateSelectedSize = (e) => {
    return setSelectedSize(e.target.value);
  };

  const SizeOption = ({ label, keyId, updateSelectedSize }) => {
    return (
      <div key={keyId}>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value={label}
          onChange={updateSelectedSize}
        />
        <label htmlFor="S">{label}</label>
      </div>
    );
  };

  const addItem = (e) => {
    e.preventDefault();
    const item = {
      size: selectedSize,
      title: productDetail.title,
    };
    addProductToCart(item);
  };

  return (
    <Layout cartTotal={cartTotal}>
      {isLoading ? (
        <p>Loading Product</p>
      ) : (
        <div className="p-3 md:flex md:justify-center md:mt-10">
          <img
            className="md:w-1/4 object-contain max-w-sm"
            src={productDetail.imageURL}
            alt={productDetail.title}
          />
          <div className="md:w-1/4 md:ml-20">
            <h3 className="py-2 mt-5 md:mt-0 text-md md:text-xl">
              {productDetail.title}
            </h3>
            <p className="py-2 mt-2 text-xl font-bold md:border-b-2 md:border-t-2 border-gray-100 md:text-sm">
              ${productDetail.price}.00
            </p>
            <p className="py-2 mt-2 text-primary-200 md:text-sm">
              {productDetail.description}
            </p>
            <form className="mt-4" onSubmit={addItem}>
              <label className="text-sm text-primary-200 uppercase font-bold tracking-wider">
                Size<span className="text-red-100">*</span>
                <span className="font-bold ml-4 text-primary-100">S</span>
              </label>
              <div>
                {productDetail.sizeOptions.length > 0 ? (
                  productDetail.sizeOptions.map((size) => {
                    return (
                      <SizeOption
                        keyId={size.id}
                        label={size.label}
                        updateSelectedSize={updateSelectedSize}
                      />
                    );
                  })
                ) : (
                  <p>No Size</p>
                )}
              </div>
              <button className="block uppercase tracking-wider py-1 px-2 border-[3px] font-bold text-sm hover:bg-primary-100 hover:text-gray-100 mt-5 md:mt-10">
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductPage;
