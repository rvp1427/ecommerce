import Select from "./Select";

function Sort() {
  return (
    <div className="flex justify-between">
      <div className="line-con">
        <h3>ALL COLLECTIONS</h3>
        <div className="line"></div>
      </div>
      <Select
        options={[
          { tag: "Sort by: Relavent", value: "relavent" },
          { tag: "Sort by: Low to High", value: "asc" },
          { tag: "Sort by: High to Low", value: "desc" },
        ]}
      />
    </div>
  );
}

export default Sort;
