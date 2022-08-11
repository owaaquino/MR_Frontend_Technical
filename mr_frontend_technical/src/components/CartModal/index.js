import React, { useEffect, useState } from "react";

const CartModal = ({ cartItems }) => {
  const [cartProducts, setCartItems] = useState([]);
  useEffect(() => {
    return setCartItems(cartItems);
  }, [cartItems]);
  return (
    <div className="p-4 pr-[100px]">
      {Object.keys(cartProducts).length > 0 ? (
        Object.keys(cartProducts).map((key) => (
          <li key={key} className="flex mb-[30px]">
            <img
              className="w-[70px] mr-5"
              src={cartProducts[key].imageURL}
              alt={cartProducts[key].title}
            />
            <div className="text-sm p-0 m-0">
              <p>{cartProducts[key].title}</p>
              <p className="font-bold mb-2">${cartProducts[key].price}.00</p>
              <p className="text-sm">
                Size: <span>{cartProducts[key].size}</span>
              </p>
            </div>
          </li>
        ))
      ) : (
        <span className="text-sm">No Item</span>
      )}
    </div>
  );
};

export default CartModal;
