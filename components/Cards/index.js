import { Row, Col, Button, Space } from 'antd';
import Image from 'next/image';
import styles from './styles.module.sass';
import Tag from '../Tags';
import Price from '../Price';
import Link from 'next/link';

const CardLayout = ({
  children,
  priceLayout,
  staticCard,
  image,
  type = 'spa',
  currency = 'es',
}) => {
  return (
    <article
      className={`${!staticCard ? styles.card__base : ''} ${styles.card} ${
        type ? `${styles['card__' + type]}` : styles.card__tour
      } `}
    >
      <div className={`${styles.card__inner}`}>
        <div className={`${styles.card__image}`}>
          <Image
            // layout="fill"
            className={`${styles.img}`}
            src={image}
            alt="Picture of the author"
            layout="responsive"
            // unsized={}
            height={200}
            width={300}
          />
        </div>
        <div className={`${styles.card__info}`}>{children}</div>
        <div className={`${styles.card__caption}`}>
          {priceLayout ? (
            priceLayout
          ) : (
            <div>
              <Row type="flex">
                <Col xs={6} md={12}>
                  <Price price={50000} suffix="Precio por adulto" />
                </Col>
                {/* <Col xs={6} md={12}>
                  <Price price={5000} suffix="Precio por menor" />
                </Col> */}
              </Row>
              <Button block type="primary" size="large" className="mb-10">
                Reservas
              </Button>
              <Button block size="large">
                Ver mas Detalles
                <Link href="/tours/">
                  <a>Blog Post</a>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
const CardTour = ({
  data,
  currency,
  language = 'es',
  type,
  addToCart,
  t,
  children,
  ...props
}) => {
  return (
    <CardLayout
      image={data.image}
      priceLayout={
        <div>
          <Row type="flex">
            <Col xs={6} md={12}>
              <Price price={50000} suffix={t('ppa')} />
            </Col>
          </Row>
          <Button block type="primary" size="large" className="mb-10">
            {t('book-now')}
          </Button>
          <Link href={'/tours/' + data.id}>
            <Button block size="large">
              <a>{t('see-details')}</a>
            </Button>
          </Link>
        </div>
      }
    >
      <div className="card__tour__info">
        <span className={styles.card__title}>
          <strong>{data.nombre[language]}</strong>
          {type == 'tour' && <small>Chale</small>}
        </span>
        <div className="card__tour__tags">
          <Space>
            <Tag text="snorkel" />
            <Tag text="Idioma del Tour: Es/En" type="language" />
          </Space>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          debitis voluptates,
        </p>
      </div>
    </CardLayout>
  );
};

export const CardTourStatic = ({
  data,
  currency,
  language = 'es',
  type,
  addToCart,
  t,
  children,
  ...props
}) => {
  return (
    <CardLayout
      image={data.image}
      staticCard
      priceLayout={
        <div>
          <Row type="flex">
            <Col xs={12}>
              <Price price="1325" suffix={t('ppa')} />
            </Col>
            <Col xs={12}>
              {/* <Link
                href={{
                  pathname: `/users/${slug}`, // Will match `/users/some-slug` path
                  query: { lang }, // Will pass `?lang=en` as query param
                }}
              >
                Click me
              </Link> */}
              <Link
                href={{
                  pathname: `/tours/${data.id}`, // Will match `/users/some-slug` path
                  query: { language }, // Will pass `?lang=en` as query param
                }}
              >
                <Button block size="large">
                  <a>{t('see-details')}</a>
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      }
    >
      <div className="card__tour__info">
        <span className={styles.card__title}>
          <strong>{data.nombre[language]}</strong>
          {type == 'tour' && <small>Tour</small>}
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          debitis voluptates,
        </p>
      </div>
    </CardLayout>
  );
};

export default CardTour;
