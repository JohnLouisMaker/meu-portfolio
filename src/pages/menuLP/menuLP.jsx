import javaproject from "../../assets/java-project.png";
import CodeJava from "../../components/codejava/codejava";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function MenuLP() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header className="no-header-margin" />

      <section className="text-center mt-0 pt-6 px-4">
        <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl mb-8 mt-0">
          Menu LP
        </h1>

        <img
          src={javaproject}
          alt="Menu LP"
          className="mx-auto w-full max-w-2xl rounded-lg shadow-lg mb-10 animate-slide-up"
        />
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre o Menu LP
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-6 sm:px-8 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
          <p>
            Aqui você pode colocar uma descrição do Menu LP, explicando o que é,
            para que serve e qualquer outra informação relevante para o usuário.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Código
        </h2>
        <div className="custom-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <CodeJava />
        </div>
      </section>
      <Footer />
    </div>
  );
}