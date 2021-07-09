// aca podemos hacer un import dinamico, ya que e contenido cambia o creamos un layout con los formularios de cada tipo...
import styles from './searchbox.module.sass';

const SearchBox = ({ type, children, isMobile, t, ...props }) => {
  return (
    <div className={styles.search_box}>
      <div className={`${styles.search_box__title} hidden-md`}>
        {t('modify_search')}
      </div>
      <div className={styles.search_box__inner}>{children}</div>
    </div>
  );
};

export default SearchBox;
