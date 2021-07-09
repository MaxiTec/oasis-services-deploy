import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavBar } from '../../navbar';
import LanguageToggle from '../LanguageToggle';
import CartBtn from '../../cart';
import styles from './styles.module.sass';
const Header = ({ isMobile, t, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.header}>
      {/* {props.mobile && */}
      <div className={styles.header__wrap}>
        <div className={`${styles.header__mobile} hidden-md`}>
          <div
            className={styles.header__mobile__brand}
            onClick={() => {
              router.push('/').then(() => {
                window.scrollTo(0, 0);
              });
            }}
          >
            <span
              style={{ color: 'white' }}
              className="icon icon-icono-oasis icon--xl"
            ></span>
          </div>
          <div className={styles.header__mobile__btns}>
            {router.route != '/reservacion' && <CartBtn />}
            <LanguageToggle />
            <div
              className={`${styles.header__mobile__open} ml-5`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="icon icon-menu icon--xll"></span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.header__navbar} container visible-flex-md${
            isOpen && isMobile ? 'isOpen' : ''
          }`}
        >
          <div className={`${styles.header__navbar__brand}`}>
            {/* <Image
              src="/img/logos/logo-oasis.png"
              alt="Oasis Hoteles"
              width={100}
              height={50}
            /> */}
            <span
              style={{ color: 'white' }}
              className="icon icon-icono-oasis icon--xll"
            ></span>
          </div>
          {/* <div className={styles.header__navbar__nav}> */}
          <NavBar
            t={t}
            language="es"
            closeMenu={closeMenu}
            isOpen={isOpen && isMobile}
          />
          {/* </div> */}
          <div className={`${styles.header__navbar__right} hidden-xs`}>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
// const WithTransHeader = withTranslation("common")(Header);
export default Header;
