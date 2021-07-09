const Tag = ({ text = 'sample', className, type = 'snorkel', ...props }) => {
  const classes = `tag mt-10 mb-10 ${className}`;
  return (
    <>
      <div className={classes}>{text}</div>
      <style jsx>{`
        .tag {
          display: flex;
          align-items: center;
        }
        .tag:before {
          margin-right: 5px;
          content: '';
          display: inline-block;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: ${type == 'snorkel' ? 'green' : 'red'}
      `}</style>
    </>
  );
};

export default Tag;
