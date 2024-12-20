function Select({ options }) {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <select onChange={handleChange} name={name} className="select-collection">
      {options.map(({ tag, value }) => (
        <option value={value} key={value}>
          {tag}
        </option>
      ))}
    </select>
  );
}

export default Select;
