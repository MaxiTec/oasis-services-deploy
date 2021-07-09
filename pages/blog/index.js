import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Row, Col, Empty, Skeleton } from 'antd';
import { useTranslation } from 'next-i18next';
import { useUserAgent } from 'next-useragent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import SearchBox from '../../components/SearchBox';
import TourForm from '../../components/Forms/ToursForm';
import upgrades from '../../static/locales/upgrades/data.json';
import Card, { CardTourStatic } from '../../components/Cards';
import Pagination from '../../components/Pagination';
import Carousel from '../../components/Carousel';

const Blog = (props) => {
  console.log(props);
  const { t } = useTranslation('common');
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState({ count: 0 });
  console.log(currentUrl);
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString);
  } else {
    ua = useUserAgent(window.navigator.userAgent);
  }
  return (
    <Layout
      isMobile={ua.isMobile || false}
      coverUrl={'/img/covers/spa.png'}
      title="Cenas"
      currentLanguage={router.locale}
    >
      <NextSeo nofollow={true} title="Blog" />
      <Row type="flex" gutter={30}>
        <Col xs={12} lg={4}>
          <SearchBox isMobile={ua.isMobile || false}>
            <TourForm t={t} setCurrentUrl={setCurrentUrl} />
          </SearchBox>
        </Col>
        <Col xs={12} lg={8}>
          <Row type="flex" gutter={16}>
            {upgrades && upgrades.length > 0
              ? upgrades.map((ele) => {
                  return (
                    <Col xs={12} sm={6} xl={12} key={ele.id}>
                      <Card data={ele} />
                    </Col>
                  );
                })
              : null}
          </Row>
          <Pagination total={currentUrl.count} currentUrl={currentUrl} />
        </Col>
        <Col>
          <Carousel>
            {upgrades.map((ele) => {
              return <CardTourStatic key={ele.id} data={ele} />;
            })}
          </Carousel>
        </Col>
      </Row>
      {/* <h1>Blog en idioma {t('search')} </h1> */}
      {/* <div>{ua.isMobile ? '<MobileContent />' : '<DesktopContent />'}</div> */}
    </Layout>
  );
};

export async function getServerSideProps({ locale, ...props }) {
  return {
    props: {
      uaString: props.req.headers['user-agent'],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
export default Blog;
