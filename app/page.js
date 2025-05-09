import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const sampleProduct = {
    name: "گوشی موبایل اپل مدل iPhone 15 Pro Max",
    description: "ظرفیت ۲۵۶ گیگابایت - رم ۸ گیگابایت",
    features: [
      "دوربین پیشرفته ۴۸ مگاپیکسلی",
      "تراشه قدرتمند A17 Bionic",
      "صفحه نمایش ProMotion XDR",
    ],
    imageSrc: "/images/iphone1.jpg",
    altText: "گوشی آیفون ۱۵ پرو مکس",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Link href="/Product" className="group block w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-orange-400/30">
          <div className="relative w-full h-56  flex items-center justify-center">
            <Image
              src={sampleProduct.imageSrc}
              alt={sampleProduct.altText}
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>
          <div className="p-6">
            <h2
              className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors truncate"
              title={sampleProduct.name}
            >
              {sampleProduct.name}
            </h2>
            <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
              {sampleProduct.description}
            </p>
            <ul className="text-xs text-gray-500 mb-4 space-y-1">
              {sampleProduct.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-3 h-3 text-green-500 mr-1.5 rtl:ml-1.5 rtl:mr-0 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <span className="inline-block px-6 py-3 bg-orange-500 text-white text-md font-semibold rounded-lg shadow-md group-hover:bg-orange-700 transition-colors duration-300">
                مشاهده جزئیات و خرید
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
