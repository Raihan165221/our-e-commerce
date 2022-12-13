import React from 'react';
import Cart from './components/cart';

import products from './products';

function App() {
  const cart_products = products.slice(30, 31).map((product) => {
    return { ...product, qty: 2, size: 12 };
  });
  return <Cart products={cart_products} />;
}

export default App;
