const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white dark:bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-xl text-black dark:text-white"
          >
            Malek.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black dark:text-white">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="/files/Resume.pdf"
            download="Malek's Resume.pdf"
            className="btn text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white bg-white dark:bg-base-100"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
