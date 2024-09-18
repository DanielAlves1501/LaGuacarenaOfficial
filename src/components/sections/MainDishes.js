import Image from "next/image";
import React from "react";
import polloBroaster from "/public/assets/images/polloBroaster.webp";
import parrillaMixta from "/public/assets/images/parrillaMixta.webp";
import pizzaPepperoni from "/public/assets/images/pizzaPepperoni.webp";
import Btn from "@/components/Btn";
import Link from "next/link";

const MainDishes = () => {
  return (
    <section className="w-full bg-primary py-[50px]">
      <div className="main-container">
        <h2 className="title mb-[50px] ">
          Descubre nuestros platos más <br />
          <span className="text-secondary">destacados</span>
        </h2>
        <div className="flex flex-col items-center justify-center gap-16 text-center xs:gap-10 sm:flex-row sm:items-start">
          <article className="w-full sm:w-[30%] flex flex-col items-center">
            <div className="w-[60%] mx-auto flex justify-center items-center xs:h-[200px] sm:w-full">
              <Image
                src={polloBroaster}
                alt="Pollo Broaster"
                height={200} // Alto fijo
              />
            </div>
            <h3 className="subtitle text-center mt-5 xs:mt-10">Pollos</h3>
            <p className="description-text">
              Descubre el irresistible sabor de nuestro Pollo Broaster y Asado,
              marinado con una mezcla secreta de especias que le da un toque
              único y delicioso. ¡En La Guacarena, cada bocado es una fiesta de
              sabor!
            </p>
            <a href="/assets/menuPdf/CarnesPollos.pdf" target="_blank">
              <Btn text="Ver mas" btnExtraStyles="px-3 mt-5 font-semibold" />
            </a>
          </article>

          <article className="w-full flex flex-col items-center sm:w-[30%] sm:mx-5 md:mx-10 ">
            <div className="w-[60%] mx-auto flex justify-center items-center xs:h-[200px] sm:w-full">
              <Image src={parrillaMixta} alt="Parrilla Mixta" height={200} />
            </div>
            <h3 className="subtitle text-center mt-5 xs:mt-10">Parrillas</h3>
            <p className="description-text">
              Si hay algo que nos caracteriza son nuestras parrillas, ya sea
              mixta, de pollo, mar y tierra, picada, etc. ¡Descubre por qué es
              uno de nuestros platos más vendidos!
            </p>
            <a href="/assets/menuPdf/EspetadasParrillas.pdf" target="_blank">
              <Btn text="Ver mas" btnExtraStyles="px-3 mt-5 font-semibold" />
            </a>
          </article>

          <article className="w-full flex flex-col items-center sm:w-[30%]">
            <div className="w-[60%] mx-auto flex justify-center items-center xs:h-[200px] sm:w-full">
              <Image src={pizzaPepperoni} alt="Pizza Pepperoni" height={230} />
            </div>
            <h3 className="subtitle text-center mt-5 xs:mt-10">Pizzas</h3>
            <p className="description-text">
              Contamos con una gran variedad de pizzas de las cuales puedes
              elegir y personalizar como gustes!
            </p>
            <a href="/assets/menuPdf/Pizzas.pdf" target="_blank">
              <Btn text="Ver mas" btnExtraStyles="px-3 mt-5 font-semibold" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MainDishes;
