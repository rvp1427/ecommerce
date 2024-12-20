import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";

function Navbar() {
  const [active, setActive] = useState(false);
  const { cart } = useCart();

  // console.log(cart);

  // useEffect(function () {

  // }, [cart]);
  const totalItem = cart.reduce(function (prev, curr) {
    return prev + Number(curr.quantity);
  }, 0);

  // console.log(totalItem);

  return (
    <nav className="flex justify-between items-center relative ">
      <img src="/logo.png" alt="logo" className="h-14" />
      <ul
        className={`md:flex gap-8 transition duration-700 md:translate-x-0 items-center justify-center flex-wrap ${
          active
            ? "flex-col text-center flex fixed translate-x-0 bg-white top-0 h-screen w-full z-10"
            : "hidden"
        }`}
      >
        {active && (
          <button
            className="text-start"
            onClick={() => setActive((prev) => !prev)}
          >
            &larr; Back
          </button>
        )}
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/collection">COLLECTION</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li className="border-2 px-6 py-2 inline-block rounded-full">
          <NavLink to="/admin">Admin Panel</NavLink>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <button>
          <i className="bx bx-search"></i>
        </button>
        <button>
          <i className="bx bx-user"></i>
        </button>
        <NavLink className="relative text-center border-none" to={"/cart"}>
          <div className="bg-black size-5 rounded-full absolute bottom-0 right-0 text-white">
            {Number(
              cart.reduce((prev, curr) => prev.quantity + curr.quantity, 0)
            ) || 1}
          </div>
          <i className="bx bx-shopping-bag"></i>
        </NavLink>

        <button
          onClick={() => setActive((prev) => !prev)}
          className="md:hidden"
        >
          <i className="bx bx-bar-chart bx-rotate-270"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
