import HTML5 from "../../assets/html5.png";
import CSS3 from "../../assets/css3-5.png";
import JavaScript from "../../assets/javascript.png";

const card = "bg-gray-900 py-8 px-6 rounded-xl shadow-lg w-35 h-50 sm:w-40 sm:h-60 md:w-50 md:h-75 lg:w-50 h-44 flex flex-col items-center justify-center text-center";

export default function Skills() {
  return (
    <section className="py-7 ">
      <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
        Habilidades
      </h2>

      <div className="flex justify-center gap-2 md:gap-4 lg:gap-8">
        {/* Card HTML5 */}
        <div className={card}>
          <img 
            src={HTML5} 
            alt="HTML5" 
            className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 object-contain" 
          />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">HTML5</h3>
        </div>

        {/* Card CSS3 */}
        <div className={card}>
          <img 
            src={CSS3} 
            alt="CSS3" 
            className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 object-contain" 
          />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">CSS3</h3>
        </div>

        {/* Card JavaScript */}
        <div className={card}>
          <img
            src={JavaScript}
            alt="JavaScript"
            className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 object-contain"
          />
          <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">JavaScript</h3>
        </div>
      </div>
    </section>
  );
}
