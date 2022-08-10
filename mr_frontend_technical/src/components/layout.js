import React from "react";

import Header from "./header";

const Layout = ({ children, cartTotal }) => {
  return (
    <div>
      <Header cartTotal={cartTotal} />
      {children}
    </div>
  );
};

export default Layout;
