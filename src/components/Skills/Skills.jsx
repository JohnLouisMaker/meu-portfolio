import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const card =
  "bg-gray-900 py-8 px-6 rounded-xl shadow-lg w-35 h-50 sm:w-40 sm:h-60 md:w-50 md:h-75 lg:w-50 h-44 flex flex-col items-center justify-center text-center";

export default function Skills() {
  return (
    <section className="py-7 ">
      <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
        Habilidades
      </h2>

      <div className="flex justify-center gap-2 md:gap-4 lg:gap-8">
       
        <div className={card}>
          <FaHtml5 className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-orange-400" />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
            HTML5
          </h3>
        </div>

     
        <div className={card}>
          <FaCss3Alt className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-blue-600 " />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
            CSS3
          </h3>
        </div>

     
        <div className={card}>
          <IoLogoJavascript className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-yellow-300" />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
            JavaScript
          </h3>
        </div>
      </div>
    </section>
  );
}
