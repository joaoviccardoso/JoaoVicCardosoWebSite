import CssInput from "./input.module.css"

function Input({ label, type = "text", name, value, onChange, placeholder, className }) {
  return (
    <div className={CssInput.containerInput} >
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${CssInput.inputBasic} ${className === "inputErro" ? CssInput.inputErro : ""}` }
      />
    </div>
  );
}

export default Input