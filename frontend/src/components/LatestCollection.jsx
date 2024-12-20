import { useEffect, useState } from "react";
import { latestProd } from "../utilities/productfetch";
import Error from "./Error";

function LatestCollection() {
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(function () {
    latestProd().then((data) => {
      if (data.status === "success") {
        setLatestCollection(data.latest);
      }
    });
  }, []);

  return (
    <>
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
      <div className="grid-col">
        {latestCollection.length > 0 ? (
          latestCollection.map((item) => (
            <div key={item._id} className="w-full">
              <div>
                <img src={`${item.image[0]}.png`} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <h3>${item.price}</h3>
              </div>
            </div>
          ))
        ) : (
          <Error err="not found latest collection" />
        )}
      </div>
    </>
  );
}

export default LatestCollection;
