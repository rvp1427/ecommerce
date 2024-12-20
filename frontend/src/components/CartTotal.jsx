import { cartSubTotal } from "../utilities/productfetch";
import { useCart } from "./CartContext";

function CartTotal({ children }) {
  const { cart } = useCart();
  let subtotal = cartSubTotal(cart);

  return (
    <div className="w-full md:w-1/2 space-y-6">
      <div className="line-con">
        <h2 className="uppercase">cart totals</h2>
        <div className="line"></div>
      </div>
      <div className="space-y-3">
        <div className="flex flex-row justify-between border-b-2 p-2">
          <h3>Subtotal</h3>
          <span>${subtotal}</span>
        </div>
        <div className="flex flex-row justify-between border-b-2 p-2">
          <h3>Shipping Fee</h3>
          <span>$50</span>
        </div>
        <div className="flex flex-row justify-between border-b-2 p-2">
          <h3>Total</h3>
          <span>${subtotal + 50}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CartTotal;
