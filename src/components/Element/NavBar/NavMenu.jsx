import MenuItem from "./MenuItem";

const NavMenu = (props) => {
    const { event } = props;
    const { pathname } = window.location;
    const isHome = pathname === "/";

    return (
        <div
            id="navMenu"
            className="absolute items-start md:items-center left-0 right-0 flex flex-col p-3 text-[1.1rem] md:w-[50rem] md:flex-wrap lg:w-full md:justify-end font-semibold md:relative md:flex-row md:opacity-100 scale-y-0 opacity-0 md:top-0 md:p-0 uppercase  md:bg-transparent z-[100] bg-primary dark:bg-dark-primary text-light origin-top transition-all duration-300 shadow-xl md:shadow-none"
        >
            <MenuItem event={event} {...(isHome ? { link: "/#Home" } : { to: "/#Home" })}>
                Home
            </MenuItem>
            <MenuItem event={event} link="https://zakialawi.com" target="_blank">
                Blog
            </MenuItem>
            <MenuItem event={event} {...(isHome ? { link: "/#about" } : { to: "/#about" })}>
                About
            </MenuItem>
            <MenuItem event={event} to="/my-portfolio">
                Portfolio
            </MenuItem>
            <MenuItem event={event} {...(isHome ? { link: "/#contact" } : { to: "/#contact" })}>
                Contact
            </MenuItem>
            <MenuItem
                event={event}
                link="https://gallery.zakialawi.my.id/"
                className="px-4 mx-1 mb-2 shadow-xl rounded-2xl bg-accent hover:bg-primary hover:border-accent hover:border-2 hover:-translate-y-1 dark:bg-dark-accent dark:hover:border-dark-accent dark:hover:bg-dark-primary dark:hover:text-dark-light"
            >
                Gallery
            </MenuItem>
            <MenuItem
                event={event}
                link="https://zakialawi.my.id/login"
                className="px-4 mx-1 mb-2 shadow-xl rounded-2xl bg-error hover:bg-primary hover:border-error hover:border-2 hover:-translate-y-1 dark:hover:bg-dark-primary dark:hover:text-dark-light"
            >
                <i className="fa-solid fa-right-to-bracket"></i> Login
            </MenuItem>
        </div>
    );
};

export default NavMenu;
