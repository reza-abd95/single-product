"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // IoIosArrowForward اضافه شد
import Image from "next/image";
import { CiHeart, CiBellOn, CiShare2, CiCircleCheck } from "react-icons/ci";
import { BsPatchCheckFill, BsThreeDots } from "react-icons/bs";
import { FaCheck, FaStar, FaStoreAlt, FaBoxOpen } from "react-icons/fa"; // FaStoreAlt و FaBoxOpen اضافه شدند
import { FiRefreshCw } from "react-icons/fi"; // FiRefreshCw اضافه شد

const productColors = [
  {
    id: 1,
    name: "بنفش",
    colorClass: "bg-purple-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    tickColorClass: "text-white", // رنگ تیک برای بنفش
  },
  {
    id: 2,
    name: "مشکی",
    colorClass: "bg-black",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-700",
    tickColorClass: "text-white", // رنگ تیک برای مشکی
  },
  {
    id: 3,
    name: "سفید",
    colorClass: "bg-white",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-700",
    tickColorClass: "text-black", // رنگ تیک برای سفید
  },
  {
    id: 4,
    name: "سبز",
    colorClass: "bg-teal-500",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-700",
    tickColorClass: "text-white", // رنگ تیک برای سبز
  },
  {
    id: 5,
    name: "صورتی",
    colorClass: "bg-pink-400",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-700",
    tickColorClass: "text-white", // رنگ تیک برای صورتی
  },
];

export default function page() {
  const [selectedColorId, setSelectedColorId] = useState(productColors[0].id);

  const handleColorSelect = (colorId) => {
    setSelectedColorId(colorId);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1900px]  px-40 py-3 mx-auto">
        <nav>
          <ol className="flex items-center gap-3 text-xs text-gray-600">
            <li className="flex items-center">خانه</li>
            <IoIosArrowBack className="w-4 h-4 text-gray-400 mx-1" />
            <li className="flex items-center">گوشی موبایل</li>
            <IoIosArrowBack className="w-4 h-4 text-gray-400 mx-1" />
            <li className="flex items-center">موبایل</li>
            <IoIosArrowBack className="w-4 h-4 text-gray-400 mx-1" />
            <li className="flex items-center">اپل</li>
          </ol>
        </nav>
      </div>
      <div className="max-w-[1900px] px-40 py-3 mx-auto flex ">
        <div className="w-3/4 h-[1400px] flex">
          <div className="w-5/12 max-h-96  bg-white p-4 flex flex-col justify-between rounded-lg ">
            <div className="flex justify-between items-center">
              <CiShare2 className="w-4 h-4 text-gray-600 cursor-pointer" />
              <CiBellOn className="w-4 h-4 text-gray-600 cursor-pointer" />
              <CiHeart className="w-4 h-4 text-red-500 cursor-pointer" />
            </div>

            <div className="my-3 flex-grow flex items-center justify-center">
              <Image
                src="/images/iphone1.jpg"
                alt="Selected Product Image"
                width={220}
                height={280}
                className="object-contain max-h-[280px]"
              />
            </div>

            <div className="flex justify-between items-center space-x-2 rtl:space-x-reverse">
              <div className="w-[70px] h-[70px] border border-gray-300 rounded-md p-1 cursor-pointer flex items-center justify-center ">
                <BsThreeDots className="w-8 h-8 text-gray-600" />
              </div>
              <div className="w-[70px] h-[70px] border border-gray-300 rounded-md p-1 cursor-pointer  flex items-center justify-center">
                <Image
                  src="/images/iphone4.png"
                  alt="iPhone Thumbnail 2"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="w-[70px] h-[70px] border border-gray-300 rounded-md p-1 cursor-pointer  flex items-center justify-center">
                <Image
                  src="/images/iphone3.png"
                  alt="iPhone Thumbnail 3"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <div className="w-[70px] h-[70px] border border-gray-300 rounded-md p-1 cursor-pointer  flex items-center justify-center">
                <Image
                  src="/images/iphone4.png"
                  alt="iPhone Thumbnail 4"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-7/12 flex flex-col gap-6 p-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 leading-10">
                گوشی موبایل اپل مدل iPhone 16 Not Active ظرفیت ۱۲۸ گیگابایت - رم
                ۶ گیگابایت
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                iPhone 16 Not Active 128/6
              </p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <span>
                  برند:{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    اپل
                  </a>
                </span>
                <span>
                  نظرات:{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    بدون نظر{" "}
                  </a>
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                  <span>۳.۴ از ۳ رای</span>
                </span>
              </div>
              <div className="flex items-center ">
                <span className="bg-[#20C997] text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
                  <BsPatchCheckFill className="w-3.5 h-3.5" />
                  کالای اصل
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span>رنگ : </span>
              <div className="flex flex-col mt-3">
                <div className="flex flex-wrap gap-2">
                  {productColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorSelect(color.id)}
                      className={`min-w-[80px] flex-grow basis-[calc(20%-0.5rem)] rounded-lg p-2 flex items-center cursor-pointer transition-all duration-150
                                  ${
                                    selectedColorId === color.id
                                      ? `${color.bgColor} ${color.borderColor} border-2 ${color.textColor}`
                                      : `bg-gray-50 border-gray-300 border hover:border-gray-400 text-gray-700`
                                  }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-lg ${color.colorClass} border border-gray-400 flex items-center justify-center`}
                        >
                          {selectedColorId === color.id && (
                            <FaCheck
                              className={`w-3.5 h-3.5 ${color.tickColorClass}`}
                            />
                          )}
                        </span>
                        <span className="text-xs">{color.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span>گارانتی : </span>

              <button
                className={
                  "w-full lg:w-auto bg-orange-100 border border-orange-300 rounded-lg p-4 flex items-center cursor-pointer my-2 " // کلاس‌های w-full و lg:w-auto اضافه شدند و فاصله اضافی ابتدایی حذف شد
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-lg bg-orange-400 border border-gray-400 flex items-center justify-center`}
                  >
                    <FaCheck className={`w-3.5 h-3.5 text-white`} />
                  </span>
                  <span className="text-xs">گارانتی 24 ماهه سام سرویس</span>
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start">
              <span>بیمه : </span>

              <button
                className={
                  "w-full bg-[#F8F9FA] border border-[#F1F3F5] rounded-lg p-4 flex items-center cursor-pointer my-2 " // کلاس‌های w-full و lg:w-auto اضافه شدند و فاصله اضافی ابتدایی حذف شد
                }
              >
                <div className="flex  gap-3">
                  <span
                    className={`w-5 h-5 rounded-full bg-orange-white border border-gray-400 flex items-center justify-center`}
                  >
                    <FaCheck className={`w-3.5 h-3.5 text-white`} />
                  </span>
                  <Image
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    src="/images/mini-logo.png"
                    alt="insurense"
                  />
                  <div className="text-right">
                    <p className="text-xs font-semibold mb-2">
                      گواهی جبران خسارت زیترو
                    </p>
                    <p className="text-xs text-[#FF922B]">شرایط و توضیحات</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-[#F8F9FA] border border-[#CED4DA] p-4 rounded-lg shadow-md flex flex-col gap-y-5 text-xs sticky top-48 self-start">
          <div className="flex text-[10px] items-center p-3 bg-white rounded-lg">
            <Image
              src="/images/mini-logo.png"
              alt="Zitro Logo"
              width={12}
              height={12}
            />{" "}
            <span className="text-gray-700 mx-2">
              فروشنده:{" "}
              <span className="font-semibold text-orange-500">زیترو</span>
            </span>
            {/* فرض بر اینکه لوگوی زیترو موجود است */}
          </div>
          <div className="border text-[10px] border-blue-300 bg-blue-50 p-3 rounded-lg text-blue-700 flex items-center gap-2">
            <FiRefreshCw className="w-4 h-4" />
            <span>
              جهت ثبت درخواست ثبت رجیستری با شماره{" "}
              <a href="tel:02172509" className="font-semibold hover:underline">
                ۰۲۱۷۲۵۰۹
              </a>{" "}
              تماس بگیرید.
            </span>
          </div>
          <div className="space-y-3 text-[10px] text-gray-600 bg-white rounded-lg">
            <div className="flex justify-start items-center gap-2  p-3">
              <FaStoreAlt className="w-5 h-5 text-gray-500 " />
              <span>تامین حرفه ای کالای دیجیتال</span>
            </div>
            <div className="flex justify-start  items-center gap-2  p-3">
              <FaBoxOpen className="w-5 h-5 text-gray-500" />
              <span>بسته بندی و ارسال کالا</span>
            </div>
          </div>
          <div className="flex  justify-between items-start text-[10px] p-3  rounded-lg">
            <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
              ٪۱۰
            </div>
            <div className="text-left ">
              <p className="text-red-400 line-through text-sm">
                ۷۱,۰۰۰,۰۰۰ <span className="text-[10px]">تومان</span>
              </p>
              <p className="text-2xl font-bold text-gray-800">
                ۶۳,۰۰۰,۰۰۰ <span className="text-xs font-normal">تومان</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 flex flex-col gap-2">
            <div className="flex  items-center">
              <Image
                src="/images/SamanInsurance.png"
                alt="Saman Insurance"
                width={20}
                height={20}
                className="object-contain mx-2"
              />
              <span className="font-semibold text-gray-700">
                بیمه تجهیزات دیجیتال - بیمه سامان
              </span>
            </div>
            <div className="flex justify-end items-center">
              <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                ٪۱۰
              </div>
              <div className="text-left  ">
                <span className="text-gray-800 font-semibold ml-1 rtl:ml-0 rtl:mr-1">
                  ۹۰۰,۰۰۰
                </span>
                <span className="text-red-500 line-through text-xs mx-1">
                  ۱,۰۰۰,۰۰۰
                </span>
                <span className="text-[10px] text-gray-600 mx-1">تومان</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg font-semibold text-sm transition-colors">
              خرید نقدی
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-lg font-semibold text-sm transition-colors">
              خرید اقساطی
            </button>
          </div>
          <div className="flex justify-around items-center pt-3">
            <Image
              src="/images/jetvam.png"
              alt="JetVam"
              width={58}
              height={58}
              className="object-contain "
            />
            <Image
              src="/images/digipay.png"
              alt="DigiPay"
              width={58}
              height={58}
              className="object-contain "
            />
            <Image
              src="/images/moneysa.png"
              alt="Manisa"
              width={58}
              height={58}
              className="object-contain "
            />
            <Image
              src="/images/blu.png"
              alt="Blu"
              width={58}
              height={58}
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
