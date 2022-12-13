import React from 'react';
import st from './cart.module.css';
import Chackout from './chackout';
import Products from './products';

function Cart({ products }) {
  let product_count = 0;
  let subtotal = 0;
  let shipping = 0;
  let discount = 0;

  products.forEach((i) => {
    product_count += i.qty;
    subtotal += i.price;
  });

  return (
    <main>
      <div className="container">
        <h1 className={`display-text-1 ${st.t_display}`}>YOUR BAG</h1>
        <div className={st.content_wrapper}>
          <Products
            product_count={product_count}
            products={products}
          />
          <Chackout
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
          />
        </div>
      </div>
    </main>
  );
}

export default Cart;
