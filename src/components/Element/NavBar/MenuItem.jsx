const MenuItem = (props) => {
  const { className, link = "#", children = "...", event } = props;
  return (
    <a href={link} className={`${className} p-2 font-semibold uppercase transition-all duration-500 font-Poppins hover:text-accent`} onClick={event}>
      {children}
    </a>
  );
};

export default MenuItem;
