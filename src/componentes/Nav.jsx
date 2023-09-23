import { useState } from 'react';

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-screen md:hidden dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black bg-gradient-to-r
     from-yellow-100 via-transparent to-transparent dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg 
     lg:shadow-xl xl:shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#inicio" className="flex items-center">
        <img className="h-8 mr-3 text-white" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/portfolio.png" alt="logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portafolio</span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="#inicio" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="#work" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Works</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;