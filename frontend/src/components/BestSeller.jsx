import { useEffect, useState } from "react";
import { bestsellerProd } from "../utilities/productfetch";

function BestSeller() {
  const [bestseller, setBestseller] = useState([]);
  useEffect(function () {
    bestsellerProd().then((data) => setBestseller(data.best));
  }, []);

  return (
    <>
      <div className=" text-center">
        <div className="line-con">
          <h2>BEST SELLERS</h2>
          <div className="line"></div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid-col">
        {bestseller.length > 0 &&
          bestseller.map((item) => (
            <div key={item._id} className="w-full">
              <img src={item.product.image[0]} alt="" />
              <div>
                <p>{item.product.name}</p>
                <h3>${item.product.price}</h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default BestSeller;
