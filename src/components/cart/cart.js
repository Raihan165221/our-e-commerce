import React from 'react';
import st from './cart.module.css';

function Cart({ products }) {
  let product_count = 0;
  let subtotal = 0;
  let total_price = 0;
  let shipping = 0;
  let discount = 0;

  products.forEach((i) => {
    product_count += i.qty;
    subtotal += i.price;
  });

  total_price = shipping + discount + subtotal;

  return (
    <main>
      <div className="container">
        <h1 className={`display-text-1 ${st.t_display}`}>YOUR BAG</h1>
        <div className={st.content_wrapper}>
          <div className={`${st.content} ${st.products}`}>
            <div className={`${st.products_btn_wrapper}`}>
              {/* will be changed to router Link */}
              <a href="root" className={`${st.home_link} p-text-1`}>
                Continue Shopping
              </a>
              <div className={`${st.products_count} p-text-1`}>
                Shopping Bag({product_count})
              </div>
            </div>
            <ul className={`${st.products_list}`}>
              {products.map((product) => (
                <li className={`${st.product_card}`} key={product.id}>
                  <div className={`${st.img_cont}`}>
                    <img
                      src={process.env.PUBLIC_URL + product.image}
                      alt=""
                    />
                  </div>
                  <div className={`${st.product_info}`}>
                    <div>
                      Product:{' '}
                      <span className="p-text-1">{product.name}</span>
                    </div>
                    <div>
                      Size:{' '}
                      <span className="p-text-1">{product.size}</span>
                    </div>
                    <div>
                      id:{' '}
                      <span className="p-text-1">{product.id}</span>
                    </div>
                    <div className={`${st.product_qty}`}>
                      {product.qty}
                    </div>
                    <div className={`${st.price}`}>
                      ${product.price}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${st.content} ${st.chackout}`}>
            <div className={`${st.chackout_text} p-text-1`}>
              CHACKOUT
            </div>
            <div className={`${st.order_summary}`}>
              <h1 className="display-text-1">order summary</h1>
              <div className={`${st.checkout_value} p-text-1`}>
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className={`${st.checkout_value} p-text-1`}>
                <span>Estimated Shipping:</span>
                <span>${shipping}</span>
              </div>
              <div className={`${st.checkout_value} p-text-1`}>
                <span>Shipping Discount:</span>
                <span>${discount}</span>
              </div>
              <div className={`${st.checkout_value} p-text-2`}>
                <span>Total:</span>
                <span>${total_price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
