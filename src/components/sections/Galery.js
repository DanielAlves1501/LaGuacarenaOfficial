import React from "react";
import Image from "next/image";
import dobleCarne from "/public/assets/images/dobleCarne.webp";
import ensaladaCesar from "/public/assets/images/ensaladaCesar.webp";
import marYtierra from "/public/assets/images/marYtierra.webp";
import polloAsando from "/public/assets/images/polloAsando.webp";

const images = [
  {
    src: ensaladaCesar,
    alt: "Ensalada Cesar",
    colStart: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
    rowSpan: "md:row-span-2",
  },
  {
    src: marYtierra,
    alt: "Parrilla mar y tierra",
    colStart: "md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4",
    style: { objectPosition: "100% 70%" },
  },
  {
    src: dobleCarne,
    alt: "Hamburguesa Doble Carne",
    colStart: "md:row-span-1",
    style: { objectPosition: "100% 70%" },
  },
  {
    src: polloAsando,
    alt: "Pollo Asado",
    colStart: "md:row-span-2",
  },
];

const Galery = () => {
  return (
    <section className=" w-full bg-darkGray py-[50px]">
      <div className="main-container">
        <h2 className="popUp-effect title mb-[50px]">Galería</h2>
        <div className=" grid grid-cols-2 grid-rows-2 md:grid-rows-3 gap-5 mx-auto md:h-[800px] md:w-[85%]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`popUp-effect ${image.colStart} ${image.rowSpan}`}
            >
              <Image
                src={image.src}
                className="h-full w-full rounded-[10px] object-cover"
                alt={image.alt}
                style={image.style}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;
