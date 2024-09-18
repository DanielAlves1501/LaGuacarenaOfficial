import Contact from "@/components/sections/Contact";
import Galery from "@/components/sections/Galery";
import { Hero } from "@/components/sections/Hero";
import MainDishes from "@/components/sections/MainDishes";

export default function Home() {
  return (
    <>
      <Hero />
      <MainDishes />
      <Galery />
      <Contact />
    </>
  );
}
