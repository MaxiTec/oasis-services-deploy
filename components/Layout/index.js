import MetaTags from './metas';
import { useTranslation } from 'next-i18next';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import HeroImage from './HeroImage';
import Breadcrumb from '../Breadcrumbs';
const Layout = ({ isMobile, coverUrl, title, currentLanguage, ...props }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="wrap_content">
        <Header t={t} isMobile={isMobile} language={currentLanguage} />
        <MetaTags />
        <div className="content">
          {/* <div className="content pt-60 no-padding-md"> */}
          {coverUrl && <HeroImage coverUrl={coverUrl} />}
          <div className="container container-fluid pt-10 pt-20-md">
            <Breadcrumb isMobile={isMobile} title={title} hasHero={coverUrl} />
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .content {
          padding-top: 60px;
          padding-bottom: 60px;
        }
        @media screen and (min-width: 1024px) {
          .content {
            padding-top: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
