import { useState } from "react";
import SelectFilter from "./SelectFilter";

function Filters() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="min-w-[16rem] flex flex-col gap-10">
      <div className="flex text-center">
        <h2 id="arrow">FILTERS</h2>
        <label
          htmlFor="arrow "
          className="hover:cursor-pointer md:hidden"
          onClick={() => setIsopen((prev) => !prev)}
        >
          <i className={`bx bx-chevron-${isOpen ? "down" : "right"}`}></i>
        </label>
      </div>

      <div
        className={`gap-5 ${
          isOpen ? "flex flex-col" : "hidden md:flex md:flex-col"
        }`}
      >
        <SelectFilter options={["Men", "Women", "Kids"]} title="category" />
        <SelectFilter
          options={["Topwear", "Bottomwear", "Winterwear"]}
          title="type"
        />
      </div>
    </div>
  );
}

export default Filters;
