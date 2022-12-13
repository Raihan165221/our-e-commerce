import React from 'react';
import st from './cart.module.css';

function ListItem({ product }) {
  return (
    <li className={`${st.product_card}`}>
      <div className={`${st.img_cont}`}>
        <img src={process.env.PUBLIC_URL + product.image} alt="" />
      </div>
      <div className={`${st.product_info}`}>
        <div>
          Product: <span className="p-text-1">{product.name}</span>
        </div>
        <div>
          Size: <span className="p-text-1">{product.size}</span>
        </div>
        <div>
          id: <span className="p-text-1">{product.id}</span>
        </div>
        <div className={`${st.product_qty}`}>{product.qty}</div>
        <div className={`${st.price}`}>${product.price}</div>
      </div>
    </li>
  );
}

export default ListItem;
