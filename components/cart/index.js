import { Badge } from 'antd';
import styles from './cart.module.sass';
const CartBtn = (props) => {
  return (
    <div
      // className={`cart--btn ${cart.length > 0 ? 'filled' : ''}`}
      className={styles.cart_btn}
      onClick={() => {
        const cartSelector = document.querySelector('.cart');
        cartSelector.classList.add('cart--open');
      }}
    >
      <Badge
        count={5}
        offset={[1, 4]}
        style={{
          boxShadow: 'none',
          backgroundColor: '#1890FF',
          padding: '0px 2px',
          color: '#fff',
          fontSize: '8px',
          height: '9px',
          //   width: '9px',
          lineHeight: '7px',
          borderRadius: '9px',
          minWidth: '9px',
        }}
      >
        <span
          style={{ fontSize: 12, color: '#ffffff' }}
          className="icon icon-shopping-cart"
        ></span>
      </Badge>
    </div>
  );
};
export default CartBtn;
