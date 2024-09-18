import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const cartRef = useRef();

  //Handling the click outside of the Cart

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      !event.target.classList.contains("cart-button")
    ) {
      setIsCartOpen(false);
    }
  };

  // Adding and removing the listeners
  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, handleClickOutside]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          ref={cartRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bg-white w-[250px] h-[400px] z-10 top-[100px] right-0 rounded-[5px]"
        >
          {/* Aquí puedes agregar el contenido de tu carrito */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
