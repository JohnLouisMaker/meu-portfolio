import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="mb-90 sm:flex sm:justify-between">
        <div className="text-center py-5 sm:flex sm:px-10 sm:gap-2 sm:text-lg md:text-xl lg:text-3xl  ">
          <h1 className="font-raleway-bold text-white">João Luis</h1>
          <h1 className="text-blue-600 font-raleway-bold">
            Desenvolvedor Web - Front-end
          </h1>
        </div>

        <div
          className="flex justify-center 
        gap-2 sm:gap-5 sm:px-10 "
        >
          <button
            className=" text-blue-800  hover:text-blue-600 active:scale-85
          text-xl sm:text-2xl md:text-3xl lg:text-4xl "
          >
            <FaLinkedin />
          </button>
          <button className=" text-blue-800  hover:text-blue-600 active:scale-85 text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
            <FaGithub />
          </button>
        </div>
      </div>
    </>
  );
}
