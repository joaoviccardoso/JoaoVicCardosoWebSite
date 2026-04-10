import CssRadio from "./radio.module.css"

function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className={CssRadio.containerInputRadio}>

      <p>{label}</p>
      <div>
        {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
      </div>
      
    </div>
  );
}

export default RadioGroup