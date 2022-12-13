import React from 'react';
import st from './cart.module.css';
import ListItem from './list_item';

function Products({ product_count, products }) {
  return (
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
          <ListItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
