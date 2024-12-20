import Loading from "./Loading";
import { useProd } from "./ProductContext";
import { Link } from "react-router-dom";

function CollectionList() {
  const { collection, filteredCollection } = useProd();
  const collect =
    filteredCollection.length > 0 ? filteredCollection : collection;
  return (
    <div className="grid-col">
      {collection.length === 0 ? (
        <Loading />
      ) : (
        collect.map((prod) => (
          <Link key={prod._id} to={`${prod._id}`}>
            <div className="w-full overflow-hidden">
              <img src={`${prod.image[0]}.png`} alt={prod.name} />
            </div>
            <div>
              <p>{prod.name}</p>
              <h3>${prod.price}</h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default CollectionList;
