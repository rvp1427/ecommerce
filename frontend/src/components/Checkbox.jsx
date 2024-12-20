import { useState } from "react";
import { useProd } from "./ProductContext";

function Checkbox({ item, title }) {
  const [isChecked, setIsChecked] = useState(true);

  const { setFilterCriteria, setFiltername } = useProd();

  function handleChange() {
    setIsChecked((prev) => !prev);
    setFilterCriteria((prev) => {
      return { ...prev, [title]: { ...prev[title], [item]: isChecked } };
    });
    setFiltername([title, `${item}-${isChecked}`]);
  }
  return (
    <>
      <input type="checkbox" onChange={handleChange} value={isChecked} />
      <p>{item}</p>
    </>
  );
}

export default Checkbox;
