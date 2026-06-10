import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CardStack from "@/components/CardStack";
import Footer from "@/components/Footer";
import { FilterProvider } from "@/components/FilterContext";

export default function Home() {
  return (
    <>
      <Nav />
      <FilterProvider>
        <Hero />
        <CardStack />
      </FilterProvider>
      <Footer />
    </>
  );
}
