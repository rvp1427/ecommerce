function Select({ options, handleChange }) {
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
