const Separator = ({ className }) => {
  const classes = `separator mt-10 mb-10 ${className}`;
  return (
    <>
      <div className={classes} />
      <style jsx>{`
        :global (.separator) {
          width: 100%;
          border-bottom: 1px solid rgba(68, 68, 68, 0.1);
          display: block;
        }
      `}</style>
    </>
  );
};

export default Separator;
