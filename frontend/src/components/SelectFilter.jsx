import Checkbox from "./Checkbox";

function SelectFilter({ options, title }) {
  return (
    <div>
      <div className="border-2 p-4">
        <h3 className="uppercase">{title}</h3>
        {options.map((item) => (
          <label key={item} className="flex gap-4  max-w-fit">
            <Checkbox item={item} title={title} />
          </label>
        ))}
      </div>
    </div>
  );
}

export default SelectFilter;
