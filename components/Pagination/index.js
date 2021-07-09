import { Pagination as PaginationAntd } from 'antd';
const Pagination = (props) => {
  return (
    <div className="text-center text-left-md mt-5">
      <PaginationAntd
        // simple
        className="custom-paginate"
        // showLessItems={true}
        responsive={true}
        showQuickJumper={false}
        // itemRender={(page, type, originalElement) => {
        //   console.log(page, type, originalElement);
        //   // if (type === 'page') {
        //   //   return page;
        //   // } else if (type === 'jump-prev' || type === 'jump-next') {
        //   //   return 'null';
        //   // }
        //   return <span>HOLA</span>;
        // }}
        hideOnSinglePage={true}
        showSizeChanger={false}
        {...props}
      />
      <style jsx>{`
        :global(.custom-paginate .ant-pagination-prev button),
        :global(.custom-paginate .ant-pagination-next button) {
          border: 0px;
        }
        :global(.custom-paginate .ant-pagination-jump-prev),
        :global(.custom-paginate .ant-pagination-jump-next) {
          margin-right: 20px;
          margin-top: 20px;
        }
        :global(.custom-paginate .ant-pagination-item) {
          min-width: 80px;
          /* opacity: 0; */
          border-width: 0px;
        }
        :global(.custom-paginate
            .ant-pagination-item.ant-pagination-item-active) {
          border-width: 1px;
        }
        :global(.custom-paginate) {
          position: relative;
          display: inline-block;
        }
        @media (min-width: 768px) {
          :global(.custom-paginate::before) {
            content: '';
            display: block;
            border-bottom: 3px solid #ecf0f5;
            height: 0px;
            width: 100%;
            position: absolute;
            z-index: -10;
            top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pagination;
