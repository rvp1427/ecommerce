import { useState } from "react";
import SizeSelect from "./SizeSelect";
import { useCart } from "./CartContext";
import { toast } from "react-hot-toast";

function ProductDetail({ product }) {
  const [currImg, setCurrImg] = useState(product.image[0]);
  const { setCart, setCartQuantity, cart } = useCart();
  const [size, setSize] = useState(function () {
    const res = cart.find((item) => item._id === product._id);
    return res?.sizes || "";
  });
  const [quantity, setQuantity] = useState(function () {
    const res = cart.find((item) => item._id === product._id);
    return res?.quantity || 1;
  });

  function handleChange(name) {
    setSize(name);
  }
  // console.log(product);
  function handleCart() {
    if (!size) {
      toast.error("select size");
      return;
    }
    setCart((prev) => [
      { ...product, sizes: size, quantity: +quantity },
      ...prev,
    ]);

    // setCartQuantity((prev) => [...prev]);
  }

  // console.log(cart);
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex md:flex-col w-1/4 gap-4">
          {product?.image?.map((item) => (
            <img
              src={`/${item}`}
              alt=""
              key={item}
              onClick={() => setCurrImg(item)}
            />
          ))}
        </div>
        <img src={`/${currImg}.png`} alt={product.name} className="md:w-9/12" />
      </div>
      <div className="space-y-4 w-full">
        <h2>{product.name}</h2>
        <div className="flex">
          <img src="/star_icon.png" alt="" />
          <img src="/star_icon.png" alt="" />
          <img src="/star_icon.png" alt="" />
          <img src="/star_icon.png" alt="" />
          <img src="/star_icon.png" alt="" />
          <h3>(122)</h3>
        </div>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <h3>Select Size</h3>
        <div className="flex flex-row gap-4">
          {product.sizes.map((item) => (
            <SizeSelect
              key={item}
              name={item}
              handleChange={handleChange}
              size={size}
            />
          ))}
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            className="border-2 w-24 p-2"
          />
        </div>

        <button className="btn" onClick={handleCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
