import { useEffect } from "react";
import Select from "../components/Select";
import { fetchData } from "../utils";
import { useState } from "react";
import Loading from "../components/Loading";

function OrderItem() {
  const [orderData, setOrderData] = useState([]);

  useEffect(function () {
    fetchData("https://ecommerce-backend-efmv.onrender.com/api/order").then(
      (data) => setOrderData(data.order)
    );
  }, []);
  // console.log(orderData);

  function handleChange(e) {
    const value = e.target.value;
    const orderId = e.target.getAttribute("data-order");
    const data = {
      status: value,
    };
    fetchData(
      `https://ecommerce-backend-efmv.onrender.com/api/order/updateStatus/${orderId}`,
      "PATCH",
      data
    ).then((data) => console.log(data));
  }

  return (
    <div>
      <h2 className="uppercase mb-5">Add Item</h2>
      <table className="max-w-[60rem]">
        <tbody className="">
          {orderData.length > 0 ? (
            orderData.map((order) => (
              <tr key={order._id}>
                <td>
                  <img src="/parcel_icon.svg" alt="" />
                </td>
                <td>
                  {order.cart.map((item) => (
                    <p key={item._id} className="text-nowrap">
                      {item.name} X{item.quantity} {item.Sizes}
                    </p>
                  ))}
                  <h2>{order.user.fullname}</h2>
                  <p>{order.user.address}</p>
                </td>
                <td>
                  <p>Items : {order.cart.length}</p>
                  <p>Method : COD</p>
                  <p>Payment : Pending</p>
                  <p>Date : {new Date(Date.now()).toLocaleDateString()}</p>
                </td>
                <td>
                  $
                  {order.cart.reduce(
                    (prev, curr) => curr.quantity * curr.price + prev,
                    0
                  )}
                </td>
                <td>
                  <Select
                    options={[
                      { tag: "Order Placed", value: "Order Placed" },
                      { tag: "Packing", value: "Packing" },
                      { tag: "Shipped", value: "Shipped" },
                      { tag: "Out for Delivery", value: "Out for Delivery" },
                      { tag: "Delivered", value: "Delivered" },
                    ]}
                    name="subCategory"
                    handleChange={handleChange}
                    defaultValue={order.status}
                    orderId={order._id}
                  />
                </td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderItem;
