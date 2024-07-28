import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <a href="#" className={`${isVisible ? "fixed" : "hidden"} text-2xl bottom-[7.5rem] right-[2rem] z-[100] animate-bounceHero6s animate-scaleUp`}>
      <i className="px-3 py-4 shadow-lg fas fa-arrow-up bg-light text-primary rounded-2xl dark:text-dark-secondary"></i>
    </a>
  );
};

export default ScrollToTop;
