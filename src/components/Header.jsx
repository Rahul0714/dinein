import swiggy from "../images/swiggy.webp";
import { PiBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="h-20 shadow-lg flex justify-evenly items-center">
      <div className="flex items-center justify-center gap-7">
        <img alt="logo" src={swiggy} className="w-14 h-14 hover:scale-110" />
        <h4 className="font-bold underline hover:text-orange-500 cursor-pointer">
          Other
        </h4>
      </div>
      <div className="flex justify-center items-center gap-14 text-lg font-mono">
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
          <PiBag />
          Swiggy Corporate
        </div>
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
          <CiSearch />
          Search
        </div>
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
          <BiSolidOffer />
          Offers
        </div>
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
          <IoHelpBuoyOutline />
          Help
        </div>
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2  ">
          <CiLogin />
          Sign in
        </div>
        <div className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
          <CiShoppingCart />
          Cart
        </div>
      </div>
    </div>
  );
};

export default Header;
