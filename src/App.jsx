import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <Parallax type="about" />
      </section>

      <section>
        <About />
      </section>

      {/* <section id="Services">Parallax</section>
      <section>Services</section> */}
      
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Parallax</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
