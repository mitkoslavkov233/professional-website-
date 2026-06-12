import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Statement />
      <Profile />
      <Experience />
      <Skills />
      <Manifesto />
      <Contact />
      <Footer />
    </>
  );
}
