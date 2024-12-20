import { useContext } from "react";
import { ProdContext } from "./ProductContext";
import Select from "./Select";

function Sort() {
  const { setCollections, setFilteredCollection } = useContext(ProdContext);

  function handleChange(e) {
    const sort = e.target.value;
    if (sort === "asc") {
      setCollections((prev) => {
        const data = prev.sort((a, b) => a.price - b.price);
        setFilteredCollection(data);
        return data;
      });
    }
    if (sort === "desc") {
      setCollections((prev) => {
        const data = prev.sort((a, b) => b.price - a.price);
        setFilteredCollection(data);
        return data;
      });
    }
  }

  return (
    <div className="flex justify-between">
      <div className="line-con">
        <h3>ALL COLLECTIONS</h3>
        <div className="line"></div>
      </div>
      <div>
        <Select
          options={[
            { tag: "Sort by: Relavent", value: "relavent" },
            { tag: "Sort by: Low to High", value: "asc" },
            { tag: "Sort by: High to Low", value: "desc" },
          ]}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Sort;
