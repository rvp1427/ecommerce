import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../utilities/productfetch";
import ProductDetail from "../components/ProductDetail";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(
    function () {
      getProduct(params.id).then((data) => setProduct(data.prod));
    },
    [params.id]
  );

  return (
    <div>
      {product && (
        <div className="space-y-10">
          <ProductDetail product={product} />
          <RelatedProducts product={product} />
        </div>
      )}
    </div>
  );
}

export default Product;
