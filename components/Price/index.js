import { formatCurrency } from '../../utils/currency';
import styles from './styles.module.sass';

const Price = ({ price = 0, suffix, className, currency = 'MXN' }) => {
  const isTooLong = price.toString().length > 4;
  return (
    <div className={`${styles.price} mb-10 ${className}`}>
      <span
        className={`${styles.price__number} ${
          isTooLong ? styles.price__long : ''
        }`}
      >
        {formatCurrency(price).format()} <small>{currency}</small>
      </span>
      {suffix && <p className={styles.price__suffix}>{suffix}</p>}
    </div>
  );
};

export default Price;
