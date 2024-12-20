import { useEffect, useState } from "react";
import { latestProd } from "../utilities/productfetch";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(function () {
    latestProd().then((data) => {
      if (data.status === "success") {
        setLatestCollection(data.latest.slice(0, 5));
      }
    });
  }, []);
  console.log(latestCollection);

  return (
    <div className="space-y-5">
      <div className=" text-center">
        <div className="line-con">
          <h2>LATEST COLLECTIONS</h2>
          <div className="line"></div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid-col text-center">
        {latestCollection.length > 0 ? (
          latestCollection.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))
        ) : (
          <Loading err="not found latest collection" />
        )}
      </div>
    </div>
  );
}

export default LatestCollection;
