function SizeSelect({ name, handleChange, size }) {
  return (
    <label htmlFor={name}>
      <h1
        className={`${
          size === name ? "bg-orange-300" : "bg-gray-200"
        } size-10 text-center text-xl cursor-pointer`}
      >
        {name}
      </h1>
      <input
        type="checkbox"
        id={name}
        onChange={() => handleChange(name)}
        name={name}
        hidden
      />
    </label>
  );
}

export default SizeSelect;
