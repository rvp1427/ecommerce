import { useNavigate } from "react-router-dom";

function ProductItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className="w-full" onClick={() => navigate(`/collection/${item._id}`)}>
      <div>
        <img src={`${item.image[0]}.png`} alt="" />
      </div>
      <div>
        <p>{item.name}</p>
        <h3>${item.price}</h3>
      </div>
    </div>
  );
}

export default ProductItem;
