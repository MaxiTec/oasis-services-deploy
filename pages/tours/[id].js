import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Row, Col, Empty, Skeleton } from 'antd';
import { useTranslation } from 'next-i18next';
import { useUserAgent } from 'next-useragent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import upgrades from '../../static/locales/upgrades/data.json';
import Card, { CardTourStatic } from '../../components/Cards';
import Carousel from '../../components/Carousel';
import TitleH1, { TitleSecondary } from '../../components/Titles';
import { HeroImageInner } from '../../components/Layout/HeroImage';
import Image from 'next/image';
import IconRounded from '../../components/Icons';
import TicketsCard from '../../components/Tours';
const TourPage = (props) => {
  console.log(props);
  const { t } = useTranslation(['common']);
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState({ count: 0 });
  console.log(currentUrl);
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString);
  } else {
    ua = useUserAgent(window.navigator.userAgent);
  }
  const activities = new Array(5).fill('HOLA');
  const tickets = Array.from({ length: 5 }, () => {
    return {
      id: Math.floor(Math.random() * 40),
      name: 'name' + Math.floor(Math.random() * 40),
      adults: Math.floor(Math.random() * 10),
      children: Math.floor(Math.random() * 3),
      date: '2021-05-12',
      price: Math.floor(Math.random() * 40) + 1000,
      description:
        'lorem ipsum lorem ipsum lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip',
    };
  });
  return (
    <Layout
      isMobile={ua.isMobile || false}
      // coverUrl={'/img/covers/tours.png'}
      title="TOUR XCARET"
      currentLanguage={router.locale}
    >
      <NextSeo nofollow={true} title="Tour Xcaret" />
      <Row type="flex" gutter={40}>
        <Col>
          <HeroImageInner />
          <Carousel
            className="mt-25 mt-30-md mb-20 mb-40-md"
            settings={{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 8,
              arrows: true,
              slidesToScroll: 4,
              initialSlide: 0,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}
          >
            {activities.map((ele, index) => {
              return (
                <IconRounded key={index}>
                  <Image
                    src="https://vcmimages.sfo2.digitaloceanspaces.com/activity/MZlopabrAuiYkbqcwOpdJHRzXNnfxsCy8X4PuCyM.svg"
                    height="24"
                    width="28"
                  />
                </IconRounded>
              );
            })}
          </Carousel>
          <Row type="flex" justify="center">
            <Col>
              <TitleH1 text="ENTRADAS XCARET" isMobile={ua.isMobile || false} />
              {tickets.map((ele) => (
                <TicketsCard
                  key={ele.id}
                  data={ele}
                  t={t}
                  isMobile={ua.isMobile || false}
                />
              ))}
            </Col>
          </Row>
          <TitleSecondary className="text-center mb-10 mt-10 mb-15-md mt-45-md">
            {/* TAMBIÉN TE PUEDE INTERESAR */}
            {t('tambien_te_puede').toUpperCase()}
          </TitleSecondary>
          <Carousel>
            {upgrades.map((ele) => {
              return <CardTourStatic key={ele.id} data={ele} t={t} />;
            })}
          </Carousel>
        </Col>
      </Row>
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
export default TourPage;
