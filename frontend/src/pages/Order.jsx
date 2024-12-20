import { useState } from "react";
import CartTotal from "../components/CartTotal";
import { createOrder, updateUser } from "../utilities/productfetch";
import { useCart } from "../components/CartContext";
import toast from "react-hot-toast";

function Order() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setOrderData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handlePayment(name) {
    setPaymentMethod(name);
  }

  async function handleCart(e) {
    e.preventDefault();
    // console.log(orderData);
    console.log(cart);
    if (cart.length === 0) {
      toast.error("cart is empty");
      return;
    }
    // if()
    const user = await updateUser("676059c37d0bac3a4ccda9b2", orderData);
    const order = await createOrder("676059c37d0bac3a4ccda9b2", cart);
    console.log(user, order);
  }

  return (
    <div className="flex flex-col  justify-between gap-10">
      <form className="w-full space-y-5 flex flex-col md:flex-row gap-10 ">
        <div className="w-full max-w-[40rem] space-y-5">
          <div className="line-con">
            <h2 className="uppercase">delivery information</h2>
            <div className="line"></div>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              className="inp"
              placeholder="First Name"
              name="firstName"
              value={orderData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="inp"
              placeholder="Last Name"
              name="lastName"
              value={orderData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            className="inp"
            placeholder="Email Address"
            name="email"
            value={orderData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="inp"
            placeholder="Street"
            name="street"
            value={orderData.street}
            onChange={handleChange}
            required
          />
          <div className="flex flex-row gap-4">
            <input
              type="text"
              className="inp"
              placeholder="City"
              name="city"
              value={orderData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="inp"
              placeholder="State"
              name="state"
              value={orderData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="number"
              className="inp"
              placeholder="Zipcode"
              name="zipcode"
              value={orderData.zipcode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="inp"
              placeholder="Country"
              name="country"
              value={orderData.country}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            className="inp"
            placeholder="Phone"
            name="phone"
            value={orderData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <CartTotal handleCart={handleCart}>
          <div className="line-con">
            <h2 className="uppercase">payment method</h2>
            <div className="line"></div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <button
              className={`border px-5 py-2 uppercase text-md inline-flex items-center gap-5 `}
              onClick={() => handlePayment("cash")}
            >
              <div
                className={`w-5 border-2 ${
                  paymentMethod === "cash" && "bg-green-400"
                } rounded-full h-5`}
              ></div>
              <span>cash on delivery</span>
            </button>

            <button className="btn" type="submit" onClick={handleCart}>
              place order
            </button>
          </div>
        </CartTotal>
      </form>
    </div>
  );
}

export default Order;
