import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import usersLogo from "../assets/users-people-svgrepo-com.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar md:flex top-0 left-0 w-full h-15 hidden items-center justify-between p-2 text-white">
        <button className="cursor-pointer ml-1">
          <FaSpotify className="w-8 h-8" />
        </button>
        <div className="flex gap-3 items-center">
          <button className="cursor-pointer transition-all duration-100">
            <GoHome className="w-12 h-12 bg-[#272727] hover:scale-110 hover:bg-[#303030] hover:fill-[#e4e0e0] rounded-full p-[11px] fill-[#ababab] transition duration-300" />
          </button>
          <label className="flex relative items-center w-100 group">
            <IoIosSearch className="absolute cursor-pointer group-hover:fill-[#ffffff] transition duration-100 left-[7px] mt-0.5 w-6.5 h-6.5 text-[#ababab]" />
            <input
              type="text"
              placeholder="Apa yang ingin kamu putar?"
              className="bg-[#272727] transition duration-300 group-hover:bg-[#303030] pl-10 text-white rounded-full w-100 h-12 px-4 py-2 group-hover:ring-[.3px] focus:outline-none focus:ring-1 focus:ring-white-500"
            />
            <svg
              width="24"
              height="24"
              data-encore-id="icon"
              role="img"
              className="absolute e-91000-icon e-91000-baseline right-3 text-gray-400 cursor-pointer hover:fill-[#e4e0e0] hover:scale-110 transition duration-300"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="#ababab"
            >
              <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"></path>
              <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
            </svg>
          </label>
        </div>
        <button className="flex h-12 gap-2 hover:scale-103 items-center cursor-pointer group transition-colors -mr-20">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4.5 h-4.5 mt-0.5 transition-all duration-300"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M31.667 45.024V18.024"
                stroke="#ababab"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-colors duration-300"
              ></path>
              <path
                d="M22.667 39.024L31.667 45.024L40.666 39.024"
                stroke="#ababab"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-colors duration-300"
              ></path>
              <path
                d="M31.667 58.191C46.3948 58.191 58.334 46.2518 58.334 31.5241C58.334 16.7963 46.3948 4.85706 31.667 4.85706C16.9392 4.85706 5 16.7963 5 31.5241C5 46.2518 16.9392 58.191 31.667 58.191Z"
                stroke="#ababab"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-colors duration-300"
              ></path>
            </g>
          </svg>
          <p className="font-semibold text-[14px] text-[#ababab] mr-7 -ml-1 group-hover:text-[#e4e0e0] transition-colors duration-300">
            Pasang Aplikasi
          </p>
        </button>
        <ul className="flex gap-7">
          <li>
            <a href="#activity" className="">
              <svg
                className="w-6 h-6 group transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                    stroke="#ababab"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="group-hover:stroke-[#e4e0e0] group-hover:scale-101 transition-colors"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </li>
          <li className="lg:block hidden">
            <a href="#about" className="group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <g>
                  <circle
                    cx="16"
                    cy="13"
                    r="5"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] group-hover:scale-101 transition-colors"
                  />
                  <path
                    d="M23,28A7,7,0,0,0,9,28Z"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] group-hover:scale-101 transition-colors"
                  />
                  <path
                    d="M24,14a5,5,0,1,0-4-8"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] group-hover:scale-101 transition-colors"
                  />
                  <path
                    d="M25,24h6a7,7,0,0,0-7-7"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] transition-colors"
                  />
                  <path
                    d="M12,6a5,5,0,1,0-4,8"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] transition-colors"
                  />
                  <path
                    d="M8,17a7,7,0,0,0-7,7H7"
                    fill="none"
                    stroke="#ababab"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.76"
                    className="group-hover:stroke-[#e4e0e0] transition-colors"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li className="lg:block hidden">
            <a href="#contact">User</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
