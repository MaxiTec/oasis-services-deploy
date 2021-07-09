import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.sass';
const LanguageToggle = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.toggle}>
      <Link href={router.asPath} locale="es">
        <a
          className={`${styles.toggle__item} ${
            router.locale == 'es' ? styles.active : ''
          }`}
        >
          ES
        </a>
      </Link>
      <span
        className="mr-5 ml-5"
        style={{ color: '#ffffff' }}
        // className={`${styles.separator}`}
      >
        |
      </span>
      <Link href={router.asPath} locale="en">
        <a
          className={`${styles.toggle__item} ${
            router.locale == 'en' ? styles.active : ''
          }`}
        >
          EN
        </a>
      </Link>
    </div>
  );
};

export default LanguageToggle;
