import { useProd } from "./ProductContext";
import Select from "./Select";

function Sort() {
  const { setCollections, collection } = useProd();

  function handleChange(e) {
    const sort = e.target.value;
    // console.log(sort, collection);
    if (sort === "asc") {
      setCollections((prev) => {
        const data = prev.sort((a, b) => a.price - b.price);
        console.log(data);
        return data;
      });
    }
  }
  // console.log("sort");
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
