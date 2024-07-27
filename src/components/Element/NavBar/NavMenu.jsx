import MenuItem from "./MenuItem";

const NavMenu = () => {
  return (
    <div
      id="navMenu"
      className="absolute items-start md:items-center left-0 right-0 flex flex-col p-3 text-[1.1rem] md:w-[50rem] md:flex-wrap lg:w-full md:justify-end font-semibold md:relative top-20 md:flex-row md:opacity-100 scale-y-0 opacity-0 md:top-0 md:p-0 uppercase  md:bg-transparent z-10 bg-primary text-light origin-top transition-all duration-300"
    >
      <MenuItem link="#home">Home</MenuItem>
      <MenuItem link="/blog">Blog</MenuItem>
      <MenuItem link="#about">About</MenuItem>
      <MenuItem link="#portfolio">Portfolio</MenuItem>
      <MenuItem link="#contact">Contact</MenuItem>
      <MenuItem link="/gallery" className="px-4 mx-1 shadow-xl rounded-2xl bg-accent hover:bg-primary hover:border-accent hover:border-2 hover:-translate-y-1">
        Gallery
      </MenuItem>
      <MenuItem link="/login" className="px-4 mx-1 shadow-xl rounded-2xl bg-error hover:bg-primary hover:border-error hover:border-2 hover:-translate-y-1">
        <i className="fa-solid fa-right-to-bracket"></i> Login
      </MenuItem>
    </div>
  );
};

export default NavMenu;
