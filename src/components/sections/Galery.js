import React from "react";
import Image from "next/image";
import dobleCarne from "/public/assets/images/dobleCarne.webp";
import ensaladaCesar from "/public/assets/images/ensaladaCesar.webp";
import marYtierra from "/public/assets/images/marYtierra.webp";
import polloAsando from "/public/assets/images/polloAsando.webp";

const Galery = () => {
  return (
    <section className="w-full bg-darkGray py-[50px]">
      <div className="main-container">
        <h2 className="title mb-[50px]">Galeria</h2>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-3 gap-5 mx-auto md:h-[800px] md:w-[85%]">
          <div className=" md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
            <Image
              src={ensaladaCesar}
              className="h-full w-full rounded-[10px] object-cover"
              alt="Ensalada Cesar"
            />
          </div>

          <div className="md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
            <Image
              src={marYtierra}
              className="h-full w-full rounded-[10px] object-cover "
              style={{ objectPosition: "100% 70%" }}
              alt="Parrilla mar y tierra"
            />
          </div>

          <div className="md:row-span-1">
            <Image
              src={dobleCarne}
              className="h-full w-full rounded-[10px] object-cover "
              style={{ objectPosition: "100% 70%" }}
              alt="Hamburguesa Doble Carne"
            />
          </div>

          <div className="md:row-span-2">
            <Image
              src={polloAsando}
              className="h-full w-full rounded-[10px] object-cover "
              alt="Pollo Asado"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galery;
