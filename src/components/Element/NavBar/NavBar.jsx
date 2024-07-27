import { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [navBarMobile, setNavBarMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const navMenu = document.getElementById("navMenu");
      const width = window.innerWidth;
      const isMobile = width < 768;

      navMenu.classList.toggle("scale-y-100", !isMobile);
      navMenu.classList.toggle("opacity-100", !isMobile);
      setNavBarMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    const isOpen = navBarMobile && navMenu.classList.contains("scale-y-100");

    navMenu.classList.toggle("scale-y-100", !isOpen);
    navMenu.classList.toggle("opacity-100", !isOpen);
    navMenu.classList.toggle("scale-y-0", isOpen);
    navMenu.classList.toggle("opacity-0", isOpen);

    setNavBarMobile(!isOpen);
  };

  return (
    <header id="navBar" className="z-10 w-full bg-primary">
      <div className="z-10 flex items-center justify-between w-full px-6 py-3 min-h-20 md:px-14">
        <NavLogo className="">UNTITLE</NavLogo>

        <div id="hamMenu" className="fas fa-bars" onClick={() => toggleMenu()}></div>

        <NavMenu />
      </div>
    </header>
  );
};

export default NavBar;
