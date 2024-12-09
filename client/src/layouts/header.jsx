import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../redux/useAuth";

function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="20px"
            className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-full text-sm"
          />
        </div>
        <Link
          to=""
          className="shrink-0 tracking-[8px] text-yellow-500 font-semibold flex items-center gap-3"
        >
          <img src="/logo.png" alt="Logo" className="w-[80px]" />
        </Link>
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
              1
            </span>
          </span>
          <span className="relative">
            <Link to="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                4
              </span>
            </Link>
          </span>
          <div className="inline-block cursor-pointer border-gray-300">
            {user ? (
              <div className="flex items-center">
                <span>{user}</span>
                <button onClick={logout} className="ml-4 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    class="hover:fill-[#007bff]"
                  >
                    <path
                      d="M16 13v-2h-8v-2h8v-2l4 3-4 3zm-12 5h8v2h-8c-1.103 0-2-.897-2-2v-12c0-1.103.897-2 2-2h8v2h-8v12z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Link to="login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  className="hover:fill-[#007bff]"
                >
                  <circle cx={10} cy={7} r={6} data-original="#000000" />
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center px-10 py-3 relative">
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                to=""
                className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <Link
                to="store"
                className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Store
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link to='/admin'
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Admin
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link to="/bill"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Order
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Source
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Partner
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                More
              </a>
            </li>
          </ul>
        </div>
        <div id="toggleOpen" className="flex ml-auto lg:hidden">
          <button>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
