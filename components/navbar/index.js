import React from 'react';
// import { cartActions } from "../../actions/cartActions";
import { Menu, Dropdown } from 'antd';
import Link from './Link';
import styles from './styles.module.sass';
// import LanguageToggle from '../Layout/LanguageToggle';
// const CurrencyLanguage = (props) => {
//   return (
//     <Menu selectedKeys={[props.currency]}>
//       <Menu.Item key='MXN'>
//         <button
//           onClick={() => {
//             props.changeCurrency("MXN");
//           }}
//         >
//           MXN
//         </button>
//       </Menu.Item>
//       <Menu.Item key='USD'>
//         <button
//           onClick={() => {
//             props.changeCurrency("USD");
//           }}
//         >
//           USD
//         </button>
//       </Menu.Item>
//     </Menu>
//   );
// };
const NavBar = ({ closeMenu, t, ...props }) => {
  return (
    <div
      className={`${styles.header__navbar__wrap} ${
        props.isOpen ? styles.isOpen : ''
      }`}
    >
      <div className={`${styles.header__navbar__close} hidden-md`}>
        <span
          className="icon icon--xl icon-cross"
          onClick={() => {
            closeMenu();
          }}
        ></span>
      </div>
      <nav className={styles.header__navbar__container}>
        <li className={styles.header__navbar__link}>
          <Link activeClassName="active" href="/" as="/">
            <a>Tours</a>
          </Link>
        </li>
        <li className={styles.header__navbar__link}>
          <Link
            activeClassName="active"
            href="/transportacion"
            as="/transportacion"
          >
            <a>{t('common:menu.transportation')}</a>
          </Link>
        </li>
        <li className={styles.header__navbar__link}>
          <Link activeClassName="active" href="/daypass" as="/daypass">
            <a>Daypass</a>
          </Link>
        </li>
        <li className={styles.header__navbar__link}>
          <Link activeClassName="active" href="/upgrades" as="/upgrades">
            <a>Upgrades</a>
          </Link>
        </li>
        <li className={styles.header__navbar__link}>
          <Link activeClassName="active" href="/spa" as="/spa">
            <a>Spa</a>
          </Link>
        </li>
        {/* <li className={styles.header__navbar__link}>
          <Link activeClassName='active' href='/eventos' as='/eventos'>
            <a>{t("common:menu.events")}</a>
          </Link>
        </li> */}
      </nav>
    </div>
  );
};

export { NavBar };
