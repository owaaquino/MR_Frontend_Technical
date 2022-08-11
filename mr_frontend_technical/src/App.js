import ProductPage from "./components/ProductPage";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState({});

  const addProductToCart = (product) => {
    const items = { ...cartProducts };
    items[`product${Date.now()}`] = product;
    return setCartProducts(items);
  };

  return (
    <div className="App">
      <ProductPage
        cartTotal={cartProducts}
        addProductToCart={addProductToCart}
      />
    </div>
  );
}

export default App;
