import { Row, Col, Breadcrumb } from 'antd';
import Link from 'next/link';
import TitleH1 from '../titles';

const Breadcrumbs = ({ isMobile, hasHero, title }) => {
  return (
    <Row
      type="flex"
      justify="space-between"
      align="middle"
      className="mt-10 mb-10"
      gutter={[10, 12]}
    >
      {/* xs={{ order: 1 }} sm={{ order: 2 }} */}
      <Col
        xs={{
          span: isMobile ? 12 : hasHero ? null : 11,
          order: isMobile ? 2 : 1,
        }}
      >
        <TitleH1 text={title || 'N/A'} isMobile={isMobile} />
      </Col>
      <Col
        xs={{
          span: isMobile ? 12 : hasHero ? null : 1,
          order: isMobile ? 1 : 2,
        }}
      >
        <Breadcrumb className="text-center text-right-md ">
          <Breadcrumb.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Breadcrumb.Item>
          {/* aca se concatenan los demas */}
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
