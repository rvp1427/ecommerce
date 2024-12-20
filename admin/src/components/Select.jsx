function Select({ options, name, handleChange, defaultValue, orderId }) {
  // console.log(selectedValue);
  return (
    <select
      onChange={handleChange}
      name={name}
      defaultValue={defaultValue}
      data-order={orderId}
      className="border p-2 font-semibold text-md"
    >
      {options.map(({ tag, value }) => (
        <option value={value} key={value}>
          {tag}
        </option>
      ))}
    </select>
  );
}

export default Select;
