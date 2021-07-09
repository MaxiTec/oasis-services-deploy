import styles from './styles.module.sass';

const TitleH1 = ({ text, isMobile }) => {
  const words = text.split(' ');
  return (
    <h1 className={`${isMobile ? 'text-center' : ''} ${styles.title_h1}`}>
      {words.map((el, index) => {
        if (index == 0) {
          return (
            <span key={el}>
              {el}
              {words.length > 0 ? ' ' : ''}
            </span>
          );
        }
        return (
          <strong key={el}>
            {words.length === index + 1 ? el + '' : el + ' '}
          </strong>
        );
      })}
    </h1>
  );
};

export const TitleForm = ({
  children,
  isClicked,
  className,
  small,
  ...props
}) => {
  const addedClass = `${styles.title_form} ${small ? styles.small : ''} ${
    isClicked ? ' ' + styles.title_form__click : ''
  } text-center text-left-md ${className}`;
  return (
    <div className={addedClass} {...props}>
      {children}
    </div>
  );
};
export const TitleSecondary = ({ children, className }) => {
  const addedClass = `${styles.title_secondary} ${className}`;
  return <div className={addedClass}>{children}</div>;
};
export default TitleH1;
