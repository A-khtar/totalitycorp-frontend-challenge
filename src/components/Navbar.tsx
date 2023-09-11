import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Cartcount from "./Cartcount";
import { useCart } from "./CartContext"; 

export const Navbar = () => {
  const { count } = useCart(); 
  return (
    <div className="lg:container mx-auto px-4 lg:px-0 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-800">BABY-KART</h1>
          <div className="ml-4 lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => {
                
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden");
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className="lg:flex lg:items-center hidden w-full lg:w-auto mt-4 lg:mt-0"
        >
          <div className="relative w-full max-w-md">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full lg:w-[400px] lg:mx-15 pr-3"
              type="text"
              placeholder="Search Your Product"
            />
            <FaSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
          </div>
          
          <div className="flex gap-4 ml-4">
          <Link to="./authorization">
            <div className="icon__wrapper border border-gray-400 rounded-full w-10 h-10 grid place-items-center text-[18px] lg:w-12 lg:h-12">
              <BiUserCircle />
              
            </div>
            </Link>
            <Link to="./billingPage">
              <div className="icon__wrapper relative border border-gray-400 rounded-full w-10 h-10 grid place-items-center text-[18px] lg:w-12 lg:h-12">
                <GiShoppingCart />
                <Cartcount size="w-6 h-6 lg:w-8 lg:h-8" cart={count} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
