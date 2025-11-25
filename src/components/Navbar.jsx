import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import notificationLogo from "../assets/bell.png";
import usersLogo from "../assets/users-people-svgrepo-com.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar top-0 left-0 w-full flex items-center justify-between p-2 text-white">
        <button className="cursor-pointer ml-1">
          <FaSpotify className="w-8 h-8" />
        </button>
        <div className="flex gap-3 items-center">
          <button className="">
            <GoHome className="w-12 h-12 bg-[#272727] rounded-full p-[11px]" />
          </button>
          <label className="flex relative items-center">
            <IoIosSearch className="absolute left-1.5 mt-0.5 w-6.5 h-6.5 text-gray-400" />
            <input
              type="text"
              placeholder="search"
              className="bg-gray-800 pl-10 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </label>
        </div>
        <button className="flex gap-2 items-center transition-colors -mr-20">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
                d="M31.667 45.024V18.024"
                stroke="#ababab"
                stroke-width="4.736"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M22.667 39.024L31.667 45.024L40.666 39.024"
                stroke="#ababab"
                stroke-width="4.736"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M31.667 58.191C46.3948 58.191 58.334 46.2518 58.334 31.5241C58.334 16.7963 46.3948 4.85706 31.667 4.85706C16.9392 4.85706 5 16.7963 5 31.5241C5 46.2518 16.9392 58.191 31.667 58.191Z"
                stroke="#ababab"
                stroke-width="4.736"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p className="font-semibold text-[14px] text-[#ababab]">
            Pasang Aplikasi
          </p>
        </button>
        <ul className="flex gap-7">
          <li>
            <a href="#" className="invert">
              <img src={notificationLogo} className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="#about">
              <img src={usersLogo} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#contact">User</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
