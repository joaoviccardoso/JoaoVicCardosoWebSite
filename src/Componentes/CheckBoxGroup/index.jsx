import CssCheckbox from "./checkbox.module.css"

function CheckboxGroup({ label, name, options, values = [], onChange }) {
  const handleChange = (optionValue) => {
    const isSelected = values.includes(optionValue);
    const updated = isSelected
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];
    onChange({ target: { name, value: updated } });
  };

  return (
    <div className={CssCheckbox.containerInputCheckbox}>
      <p>{label}</p>
      <div>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;