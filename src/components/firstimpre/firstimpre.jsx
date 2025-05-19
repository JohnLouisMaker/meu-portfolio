import "./firstimpre.css";
import mySelf from "../../assets/Myself.png";

export default function FirstImpressions() {
  return (
    <div className="relative text-center lg:pt-40">
      <h1 className="relative z-10 font-raleway-bold text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl">
        Olá, eu sou João Luis!
      </h1>
      <img
        src={mySelf}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-11/12 max-w-sm mask-img lg:max-w-lg lg:-translate-y-10/12"
      />
    </div>
  );
}
