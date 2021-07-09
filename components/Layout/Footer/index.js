import { Row, Col } from 'antd';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './styles.module.sass';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner__footer}>
        <Row type="flex" align="center">
          <Col xs={5} lg={12} className="text-left text-center-md">
            <span className="icon icon-icono-oasis icon--xll"></span>
          </Col>
          <Col xs={7} lg={12} className="text-right text-center-md">
            <p>Oasis Hotels & Resorts</p>
            <div className="redes">
              <Link href="https://facebook.com">
                <a className={styles.footer__link}>
                  <span className="mr-10 icon icon-facebook-square icon--md"></span>
                </a>
              </Link>
              <Link href="https://facebook.com">
                <a className={styles.footer__link}>
                  <span className="mr-10 icon icon-twitter-square icon--md"></span>
                </a>
              </Link>
              <Link href="https://facebook.com">
                <a className={styles.footer__link}>
                  <span className="icon icon-instagram icon--md"></span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
