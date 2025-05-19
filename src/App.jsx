import "./App.css";
import Header from "./components/header/header";
import FirstImpressions from "./components/firstimpre/firstimpre";
import AboutMe from "./components/aboutme/aboutme";
import Footer from "./components/footer/footer";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <div className=" bg-black h-full w-full">
      <Header />
      <FirstImpressions />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}
