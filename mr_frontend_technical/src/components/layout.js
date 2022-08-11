import React, { useEffect, useState } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Header from "./header";

const Layout = ({ children, cartTotal, purchaseError, setPurchaseError }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    return setOpen(purchaseError);
  }, [purchaseError]);

  return (
    <div>
      <Header cartTotal={cartTotal} />
      <Collapse in={open} className="lg:mx-5 mt-5 flex justify-end px-2">
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setPurchaseError(false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      {children}
    </div>
  );
};

export default Layout;
