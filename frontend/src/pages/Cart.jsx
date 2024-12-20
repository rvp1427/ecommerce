import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CartTotal from "../components/CartTotal";
import Error from "../components/Error";
import CartEmpty from "../components/CartEmpty";

function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  // console.log(cart);

  //  set the quantity for items

  useEffect(function () {
    const data = cart.reduce((prev, curr) => {
      let match;
      prev.find((item) => {
        if (item._id === curr._id) {
          if (!+item.quantity) {
            item.quantity = 1;
          }
          item.quantity += 1;
          match = item;
        }
      });

      if (!prev.length) {
        return [curr];
      }

      if (!match) {
        return [...prev, curr];
      }

      return prev;
    }, []);
    setCart(data);
  }, []);

  // useEffect(function () {}, []);
  // console.log("test");

  function handleChange(e, data) {
    setCart((prev) => {
      const prod = prev.filter((item) => item._id !== data._id);
      return [{ ...data, quantity: e.target.value }, ...prod];
      // return prod;
      // return [{ ...prod, quantity: Number(e.target.value) }, ...prev];
    });
  }

  function handleCart() {
    // console.log(cart);
    navigate("/order");
  }

  return (
    <div>
      <div className="line-con">
        <h2 className="uppercase">your cart</h2>
        <div className="line"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <table className="w-full">
          {/* <thead className="w-full mb-5 inline-table">
          <tr>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
          </tr>
        </thead> */}
          {cart.length > 0 ? (
            <tbody className="w-full inline-table">
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`${item.image}.png`}
                      alt={item.name}
                      className="max-w-[6rem]"
                    />
                  </td>
                  <td>
                    <h3>{item.name}</h3>
                    <div className="flex flex-row items-center gap-4">
                      <h3>${item.price}</h3>
                      <h3 className="border-2 px-4 py-1 bg-gray-100">
                        {item.sizes}
                      </h3>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleChange(e, item)}
                      className="border-2 w-24 p-2"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => setCart((prev) => prev._id !== item._id)}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <CartEmpty />
          )}
        </table>
        <CartTotal handleCart={handleCart}>
          <button className="btn" onClick={handleCart}>
            processed to checkout
          </button>
        </CartTotal>
      </div>
    </div>
  );
}

export default Cart;
