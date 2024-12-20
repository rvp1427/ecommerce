import { useProd } from "./ProductContext";

function RelatedProducts({ product }) {
  const { relatedProducts } = useProd();
  // const data = relatedProducts(product.category, product.subCategory);
  // console.log(data);
  return (
    <div className="space-y-3">
      <div className="line-con">
        <h2>RELATED PRODUCTS</h2>
        <div className="line"></div>
      </div>
      <div className="relative">
        {/* <i className="bx bxs-chevron-left text-6xl absolute top-1/2 -left-12 -translate-y-1/2 border-2 py-4"></i> */}
        <div className="flex flex-row gap-4 w-full">
          {relatedProducts(product.category, product.subCategory)
            .slice(0, 5)
            .map((prod) => (
              <div key={prod._id} className="min-w-32 flex-nowrap">
                <div className="overflow-hidden">
                  <img src={`/${prod.image[0]}.png`} alt={prod.name} />
                </div>
                <div>
                  <p>{prod.name}</p>
                  <h3>{prod.price}</h3>
                </div>
              </div>
            ))}
        </div>
        {/* <i className="bx bxs-chevron-right text-6xl absolute top-1/2 -right-12 -translate-y-1/2 border-2 py-4"></i> */}
      </div>
    </div>
  );
}

export default RelatedProducts;
