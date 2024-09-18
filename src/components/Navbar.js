"use client";
import { useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Btn from "./Btn";
import Cart from "./Cart";

const Navbar = ({ buttons = true }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navBarSections = [
    { pathname: "EspetadasParrillas", name: "Espetadas y Parrillas" },
    { pathname: "CarnesPollos", name: "Carnes y Pollos" },
    { pathname: "Pizzas", name: "Pizzas" },
    { pathname: "Combos", name: "Combos" },
    { pathname: "PlatosChef", name: "Platos Chef" },
    { pathname: "Hamburguesas", name: "Hamburguesas" },
    { pathname: "ContornosPostres", name: "Contornos" },
    { pathname: "Bebidas", name: "Bebidas" },
    { pathname: "ContornosPostres", name: "Postres" },
  ];

  return (
    <div className="relative">
      <nav
        className={` ${
          buttons ? "hidden" : "flex flex-col sm:flex-row"
        } text-[14px] md:flex justify-between items-center`}
      >
        <Link href="/">
          <Logo buttons={buttons} />
        </Link>

        <ul className="flex flex-wrap justify-center gap-5 font-extralight">
          {navBarSections.map((section, index) => (
            <li key={index}>
              <a
                href={`/assets/menuPdf/${section.pathname}.pdf`}
                target="_blank"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>

        {/* {buttons && (
          <div className="ml-5 flex">
            <Btn
              text="Menu"
              btnExtraStyles="w-[70px] bg-transparent border-2 mr-5 font-light"
            />
            <Btn
              text="Cart"
              handleClick={handleCart}
              btnExtraStyles="w-[70px] cart-button font-light"
            />
          </div>
        )} */}
      </nav>

      {/* Cart */}
      {/* NOTE: This is just the basic UI of the cart, you still need to add a lot of functionality here later on */}

      {/* <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}

      {/* Mobile Menu */}
      <nav className={` ${!buttons && "hidden"} py-5 md:hidden`}>
        <button
          className="block  fixed z-40 text-[22px] left-5 top-5"
          onClick={handleMobileMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="flex w-full justify-end  ">
          <Btn
            text="Menu"
            btnExtraStyles="w-[70px] bg-transparent border-2 mr-5"
          />
          {/* <Btn
            text="Cart"
            handleClick={handleCart}
            btnExtraStyles="w-[70px] cart-button"
          /> */}
        </div>

        <AnimatePresence>
          {isMobileMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="h-screen w-[45%] fixed left-0 top-0 pt-[50px] pl-5 bg-primary md:hidden"
            >
              <ul className="flex flex-col gap-5 mt-5 font-extralight">
                <li>
                  <Link href={`/`} onClick={handleMobileMenu}>
                    Inicio{" "}
                  </Link>
                </li>
                {navBarSections.map((section, index) => (
                  <li key={index}>
                    <Link
                      href={`/menu/${section.pathname}`}
                      onClick={handleMobileMenu}
                    >
                      {section.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
