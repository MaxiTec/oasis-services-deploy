import Image from 'next/image';
import styles from './styles.module.sass';
import profilePic from '../../../public/img/covers/tour-descripcion-gral.png';

const HeroImage = ({ coverUrl }) => {
  return (
    <div className={styles.hero_image}>
      <div
        className={styles.hero_image__bkgr}
        style={{
          backgroundImage: `url("${coverUrl || '/img/covers/cenas.png'}")`,
        }}
      ></div>
    </div>
  );
};

export const HeroImageInner = () => {
  return (
    <div className="hero_image__inner">
      {/* <Row type="flex">
    <Col> */}
      <Image src={profilePic} />
      {/* </Col>
  
  </Row> */}
    </div>
  );
};

export default HeroImage;
