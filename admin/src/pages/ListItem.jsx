import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const originalUrl = "https://ecommerce-backend-efmv.onrender.com/api/product";

function ListItem() {
  const [productData, setProductData] = useState([]);
  const [url, setUrl] = useState(originalUrl);
  const navigate = useNavigate();

  useEffect(
    function () {
      fetchData(url).then((data) => setProductData(data.prod));
    },
    [url]
  );

  function handleDelete(id) {
    fetchData(
      `https://ecommerce-backend-efmv.onrender.com/api/product/${id}`,
      "delete"
    ).then((data) => {
      if (data.prod.acknowledged) {
        toast.success("deleted successfully");
        setProductData((prev) => prev.filter((item) => item._id !== id));
      }
    });
  }
  return (
    <div className="w-full">
      <h1>All Products List</h1>
      {productData.length > 0 ? (
        <table className="max-w-[60rem]">
          <thead className="">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {productData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`/${item.image[0]}.png`}
                    alt={item.name}
                    className="size-20"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn text-xl"
                    onClick={() => handleDelete(item._id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ListItem;
