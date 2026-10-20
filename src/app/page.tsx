import "./home.css";
import { archivo, fraunces, inter } from "./components/zooro/fonts";
import Navbar from "./components/zooro/Navbar";
import Hero from "./components/zooro/Hero";
import Services from "./components/zooro/Services";
import Marquee from "./components/zooro/Marquee";
import WhyZooro from "./components/zooro/WhyZooro";
import Plates from "./components/zooro/Plates";
import Process from "./components/zooro/Process";
import Contact from "./components/zooro/Contact";
import Footer from "./components/zooro/Footer";

export default function Home() {
  return (
    <div className={`zooro-home ${archivo.variable} ${fraunces.variable} ${inter.variable}`}>
      <Navbar />
      <Hero />
      <Services />
      <Marquee />
      <WhyZooro />
      <Plates />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
