import Image from "next/image";
import {
  CiSearch,
  CiUser,
  CiBellOn,
  CiSquareMore,
  CiShoppingBasket,
  CiShoppingTag,
} from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { RiStackFill } from "react-icons/ri";
import { PiBookOpenTextFill } from "react-icons/pi";
import { BsBookmarkDashFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="w-full lg:border-b lg:border-gray-200 lg:shadow-xl/5">
      <div className="max-w-[1900px] px-40 py-3 mx-auto  justify-between items-center hidden lg:flex flex-col ">
        <div className=" w-full flex justify-between items-center">
          <div>
            <Image
              src="/images/logo.png"
              alt="لوگوی شرکت"
              width={120}
              height={40}
            />{" "}
          </div>
          <div className="w-[574px] h-[48px] border border-[#CED4DA] rounded-xl p-4 flex items-center justify-end focus-within:border-orange-500 transition-colors duration-200 mx-4">
            <input
              type="text"
              placeholder="جست و جو"
              className="outline-none text-right flex-grow "
            />
            <CiSearch className="text-gray-700 w-4" />{" "}
          </div>
          <div className="flex items-center gap-4 ">
            <CiBellOn className="w-6 h-6 text-gray-700 cursor-pointer" />{" "}
            <CiUser className="w-6 h-6 text-gray-700 cursor-pointer" />{" "}
            <CiShoppingBasket className="w-6 h-6 text-gray-700 cursor-pointer" />{" "}
          </div>
        </div>
        <div className="w-full pb-4 pt-8 hidden lg:flex justify-start items-center text-sm">
          <div className="flex items-center gap-8 text-gray-700">
            <div className="flex items-center gap-x-1.5 cursor-pointer hover:text-orange-500">
              <RiStackFill className="w-5 h-5" />
              <span className="text-xs">دسته بندی کالا</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-x-1.5 cursor-pointer text-red-500 bg-[#FF878733] hover:bg-red-100 px-2.5 py-1 rounded-md">
              <CiShoppingTag className="w-5 h-5" />
              <span className="text-xs">زیترو آف</span>
            </div>

            <div className="flex items-center gap-x-1.5 cursor-pointer hover:text-orange-500">
              <PiBookOpenTextFill className="w-5 h-5" />
              <span className="text-xs">مجله آنلاین زیترو</span>
            </div>

            <div className="flex items-center gap-x-1.5 cursor-pointer hover:text-orange-500">
              <BsBookmarkDashFill className="w-5 h-5" />
              <span className="text-xs">درخواست تسهیلات</span>
            </div>

            <div className="flex items-center gap-x-1.5 cursor-pointer hover:text-orange-500">
              <FaStore className="w-5 h-5" />
              <span className="text-xs">درخواست نمایندگی</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between lg:hidden px-4 py-4  mx-auto">
        <div className="flex items-center justify-center gap-1">
          <IoIosArrowForward className="w-5" />
          <Image
            src="/images/logo.png"
            alt="لوگوی شرکت"
            width={64}
            height={24}
          />{" "}
        </div>
        <div className="flex items-center justify-center gap-2">
          <CiShoppingBasket className="w-5 h-5  text-gray-700 cursor-pointer" />
          <CiSearch className="w-5 h-5 text-gray-700 cursor-pointer" />{" "}
          <CiSquareMore className="w-5 h-5 text-gray-700 cursor-pointer" />{" "}
        </div>
      </div>
    </div>
  );
}
