import HeroBg from "../HeroBg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex justify-center items-center">
      <HeroBg />
      <div className="h-full w-full absolute flex justify-center items-center">
        <div className="hero-title text-center w-[80%] lg:w-[55%]">
          <h1 className="text-heroTitleSm font-playfair sm:text-heroTitle font-semibold leading-[82px]">
            La Guacareña
          </h1>
          <q className="font-playfair text-quote font-light">
            El verdadero sabor de{" "}
            <span className="text-secondary">Guacara</span>
          </q>
          <p className="mt-5 description-text ">
            ¡Descubre la excelencia culinaria que perdura desde hace más de 25
            años en nuestro restaurante! Deléitate con una amplia gama de
            sabores, y déjate seducir especialmente por nuestras exquisitas
            especialidades en pollos y parrillas. Ven y disfruta de la auténtica
            pasión por la cocina que nos distingue!
          </p>
        </div>
      </div>
    </section>
  );
};
