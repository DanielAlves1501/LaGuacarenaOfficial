import Image from "next/image";
import React from "react";
import polloBroaster from "/public/assets/images/polloBroaster.webp";
import parrillaMixta from "/public/assets/images/parrillaMixta.webp";
import pizzaPepperoni from "/public/assets/images/pizzaPepperoni.webp";
import Btn from "@/components/Btn";

const dishes = [
  {
    image: polloBroaster,
    alt: "Pollo Broaster",
    title: "Pollos",
    description:
      "Descubre el irresistible sabor de nuestro Pollo Broaster y Asado, marinado con una mezcla secreta de especias que le da un toque único y delicioso. ¡En La Guacarena, cada bocado es una fiesta de sabor!",
    link: "/assets/menuPdf/CarnesPollos.pdf",
    height: 200,
    extraStyles: "",
  },
  {
    image: parrillaMixta,
    alt: "Parrilla Mixta",
    title: "Parrillas",
    description:
      "Si hay algo que nos caracteriza son nuestras parrillas, ya sea mixta, de pollo, mar y tierra, picada, etc. ¡Descubre por qué es uno de nuestros platos más vendidos!",
    link: "/assets/menuPdf/EspetadasParrillas.pdf",
    height: 200,
    extraStyles: "",
  },
  {
    image: pizzaPepperoni,
    alt: "Pizza Pepperoni",
    title: "Pizzas",
    description:
      "Contamos con una gran variedad de pizzas de las cuales puedes elegir y personalizar como gustes!",
    link: "/assets/menuPdf/Pizzas.pdf",
    height: 230,
    extraStyles: "",
  },
];

const MainDishes = () => {
  return (
    <section className="w-full bg-primary py-[50px]">
      <div className="mainDish-card opacity-[0] scale-[.8] main-container">
        <h2 className="title mb-[50px]  ">
          Descubre nuestros platos más <br />
          <span className="text-secondary">destacados</span>
        </h2>
        <div className="flex flex-col items-center justify-center gap-16 text-center xs:gap-10 sm:flex-row sm:items-start">
          {dishes.map((dish, index) => (
            <article
              key={index}
              className={` w-full flex flex-col items-center sm:w-[30%] sm:h-[530px] sm:justify-between md:h-[500px] lg:h-[450px] ${dish.extraStyles}`}
            >
              <div>
                <div className="w-[60%] mx-auto flex justify-center items-center xs:h-[200px] sm:w-[80%]">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    height={dish.height} // Usar la altura específica
                  />
                </div>
                <h3 className="subtitle text-center mt-5 xs:mt-10">
                  {dish.title}
                </h3>
                <p className="description-text">{dish.description}</p>
              </div>

              <a href={dish.link} target="_blank">
                <Btn text="Ver más" btnExtraStyles="px-3 mt-5 font-semibold" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainDishes;
