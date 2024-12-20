import { useEffect, useState } from "react";
import { bestsellerProd } from "../utilities/productfetch";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

function BestSeller() {
  const [bestseller, setBestseller] = useState([]);
  useEffect(function () {
    bestsellerProd().then((data) => {
      setBestseller(data.best);
    });
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="line-con">
          <h2>BEST SELLERS</h2>
          <div className="line"></div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      <div className="grid-col text-center">
        {bestseller.length === 0 ? (
          <Loading />
        ) : (
          bestseller.map((item) => (
            <ProductItem key={item._id} item={item.product} />
          ))
        )}
      </div>
    </div>
  );
}

export default BestSeller;
