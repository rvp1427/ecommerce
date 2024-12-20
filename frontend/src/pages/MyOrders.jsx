import { useEffect, useState } from "react";

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(
    function () {
      // userid
      fetch("http://127.0.0.1:4000/api/order/676059c37d0bac3a4ccda9b2")
        .then((res) => res.json())
        .then((data) => setMyOrders(data.orders));
      console.log("useeffect called");
    },
    [active]
  );

  console.log(myOrders);

  return (
    <div className="space-y-5">
      <div className="line-con">
        <h2 className="uppercase">your cart</h2>
        <div className="line"></div>
      </div>
      <table className="w-full">
        {/* <thead className="w-full mb-5 inline-table">
          <tr>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
          </tr>
        </thead> */}

        <tbody className="w-full md:inline-table">
          {myOrders.length > 0 &&
            myOrders.map((orderItem) => {
              return orderItem.cart.map((item) => (
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
                      <h3 className="px-4 py-1">Size: {item.sizes}</h3>
                      <h3>Quantity: {item.quantity}</h3>
                    </div>
                    <p>Date : {new Date(Date.now()).toLocaleDateString()}</p>
                    <p>Payment: COD</p>
                  </td>
                  <td>
                    <div className="flex flex-row items-center gap-4">
                      <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                      <h3>{orderItem.status}</h3>
                    </div>
                  </td>
                  <td>
                    <button
                      className="border-2 px-4 py-3"
                      onClick={() => setActive((prev) => !prev)}
                    >
                      Track Order
                    </button>
                  </td>
                </tr>
              ));
            })}
        </tbody>
      </table>
    </div>
  );
}

export default MyOrders;
