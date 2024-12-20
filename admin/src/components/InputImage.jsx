import { useState } from "react";

function InputImage({ imgSrc, name, size, type, handleChange }) {
  const [check, setCheck] = useState(false);
  if (type === "file")
    return (
      <label htmlFor={name}>
        <img src={imgSrc} alt="image" className="w-20" />
        <input
          type="file"
          id={name}
          name={name}
          onChange={handleChange}
          hidden
        />
      </label>
    );
  if (type === "text") {
    return (
      <input type="text" name={name} className="inp" onChange={handleChange} />
    );
  }
  if (!type) {
    return <textarea name={name} onChange={handleChange} />;
  }
  if (type === "number") {
    return (
      <input
        name={name}
        type="number"
        className="inp"
        onChange={handleChange}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <label htmlFor={name}>
        <h1
          className={`${
            check ? "bg-orange-100" : "bg-gray-200"
          } size-10 text-center text-xl`}
        >
          {name}
        </h1>
        <input
          type="checkbox"
          onClick={() => setCheck((prev) => !prev)}
          id={name}
          value={check}
          onChange={handleChange}
          name={name}
          hidden
        />
      </label>
    );
  }
}

export default InputImage;
