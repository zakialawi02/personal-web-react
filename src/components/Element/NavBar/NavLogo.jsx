const NavLogo = (props) => {
  const { className, children = "Title" } = props;
  return (
    <div id="navLogo" className={`${className} max-w-[15rem] text-light text-2xl font-bold uppercase`}>
      {children}
    </div>
  );
};

export default NavLogo;
