import { Carousel as AntCarousel } from 'antd';
import { merge } from 'lodash';

const Carousel = ({ children, settings = {}, ...props }) => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    const isDisabled = className.split(' ').includes('slick-disabled');
    return (
      <div
        className={`${
          isDisabled ? 'disabled' : ''
        } custom-arrow custom-arrow--next`}
        onClick={onClick}
      >
        <span className="icon icon-chevron-right icon--md"></span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    const isDisabled = className.split(' ').includes('slick-disabled');
    return (
      <div
        className={` ${
          isDisabled ? 'disabled' : ''
        } custom-arrow custom-arrow--prev`}
        onClick={onClick}
      >
        <span className="icon icon-chevron-left icon--md"></span>
      </div>
    );
  }
  const settingsMerge = merge(
    {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    settings
  );
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <>
      <AntCarousel {...settingsMerge} afterChange={onChange} {...props}>
        {children}
      </AntCarousel>
      {/* Chale todo eso para no usar los estilos de antd :c */}
      <style jsx>{`
        :global(.ant-carousel .custom-arrow) {
          position: absolute;
          top: 50%;
          left: -10px;
          display: block;
          margin-top: -10px;
          padding: 0;
          font-size: 27px;
          line-height: 0;
          border: 0;
          outline: none;
          cursor: pointer;
          color: #1890ff;
        }

        :global(.ant-carousel .custom-arrow.disabled) {
          opacity: 0.5;
        }
        :global(.slick-track) {
          margin: 0 auto;
        }
        :global(.ant-carousel .custom-arrow.custom-arrow--next) {
          left: auto;
          right: -10px;
        }
        :global(.ant-carousel) {
          margin-bottom: 20px;
        }
        :global(.ant-carousel .slick-dots-bottom) {
          bottom: -20px;
        }
        :global(.ant-carousel .slick-dots li button) {
          background: #1890ff;
          border-radius: 10px;
        }
        :global(.ant-carousel .slick-dots li.slick-active button) {
          background: #1890ff;
        }
        @media screen and (min-width: 1024px) {
          :global(.ant-carousel .custom-arrow) {
            left: -30px;
          }
          :global(.ant-carousel .custom-arrow.custom-arrow--next) {
            right: -30px;
          }
        }
      `}</style>
    </>
  );
};

export default Carousel;
