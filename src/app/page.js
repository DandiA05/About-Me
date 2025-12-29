import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Qualification from "@/components/Qualification";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
