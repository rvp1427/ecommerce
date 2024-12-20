import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  // useEffect(function () {
  //   const data = cart.reduce((prev, curr) => {
  //     let match;
  //     prev.find((item) => {
  //       if (item._id === curr._id) {
  //         if (!item.quantity) {
  //           item.quantity = 1;
  //         }
  //         item.quantity += 1;
  //         match = item;
  //       }
  //     });

  //     if (!prev.length) {
  //       return [curr];
  //     }

  //     if (!match) {
  //       return [...prev, curr];
  //     }

  //     return prev;
  //   }, []);
  //   setCart(data);

  //   return () => data;
  // }, []);

  return (
    <CartContext.Provider
      value={{ setCart, cart, cartQuantity, setCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
