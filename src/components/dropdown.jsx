export const Dropdown = ({ heading, value, onChange, options }) => {
  return (
    <label className="drop">
      <p className="dropLabel" >{heading}</p>
      <select className="selectVal" value={value} onChange={onChange}>
        {options.map((option) => (
          <option className="selectVal" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
