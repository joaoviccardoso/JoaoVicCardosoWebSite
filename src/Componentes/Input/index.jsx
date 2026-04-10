import CssInput from "./input.module.css"

function Input({ label, type = "text", name, value, onChange, placeholder }) {
  return (
    <div className={CssInput.containerInput} >
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input