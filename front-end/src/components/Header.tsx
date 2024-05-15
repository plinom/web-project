import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden md:flex w-full md:w-auto" id="navbar-default">
          <ul className="flex p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="/severyn" className={`block py-2 px-3  text-gray-900 rounded ${window.location.pathname === "/severyn" ? "dark:text-blue-700" : ""} hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</a>
            </li>
            <li>
              <a href="/" className={`block py-2 px-3  text-gray-900 rounded ${window.location.pathname === "/" ? "dark:text-blue-700" : ""} hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Log In</a>
            </li>
            <li>
              <a href="/auth" className={`block py-2 px-3  text-gray-900 rounded ${window.location.pathname === "/auth" ? "dark:text-blue-700" : ""} hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${window.location.pathname === "/auth" ? "text-blue-700" : ""}`} aria-current="page">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <a href='/mypage'>
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
