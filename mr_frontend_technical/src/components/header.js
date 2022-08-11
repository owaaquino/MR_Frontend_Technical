import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import CartModal from "./CartModal";

const Header = ({ cartTotal }) => {
  return (
    <>
      <div className="bg-gray-100 text-primary-400 lg:mx-5 mt-5 flex justify-end px-2">
        <div className="text-primary-100 text-xs py-2 flex items-center md:w-1/4">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <button
                  {...bindTrigger(popupState)}
                  className="text-primary-100"
                >
                  <FontAwesomeIcon
                    className="text-primary-100 mr-1 inline-block md:hidden"
                    icon={faCartShopping}
                  />
                  <span className="hidden md:inline-block mr-1">My Cart</span>({" "}
                  {Object.keys(cartTotal).length} )
                </button>
                <Menu {...bindMenu(popupState)}>
                  <CartModal cartItems={cartTotal} />
                </Menu>
              </>
            )}
          </PopupState>
        </div>
      </div>
    </>
  );
};

export default Header;
