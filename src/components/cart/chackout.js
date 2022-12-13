import React from 'react';
import st from './cart.module.css';

function Chackout({ subtotal, shipping, discount }) {
  return (
    <div className={`${st.content} ${st.chackout}`}>
      <div className={`${st.chackout_text} p-text-1`}>
        CHACKOUT NOW
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
          <span>${subtotal + shipping - discount}</span>
        </div>
      </div>
    </div>
  );
}

export default Chackout;
