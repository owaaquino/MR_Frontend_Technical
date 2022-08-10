import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartTotal }) => {
  return (
    <div className="bg-gray-100 text-primary-400 lg:mx-5 mt-5 flex justify-end px-2">
      <div className="text-primary-100 text-xs py-2 flex items-center">
        <p className="text-right">
          <FontAwesomeIcon
            className="text-primary-100 mr-1 inline-block md:hidden"
            icon={faCartShopping}
          />
          <span className="hidden md:inline-block mr-1">My Cart</span>({" "}
          {Object.keys(cartTotal).length} )
        </p>
      </div>
    </div>
  );
};

export default Header;
