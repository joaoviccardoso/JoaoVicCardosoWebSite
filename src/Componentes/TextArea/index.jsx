import CssTextArea from "./textArea.module.css"

function TextArea({ label, name, value, onChange, placeholder, className }) {
  return (
    <div className={CssTextArea.containerTextArea}>
      <label>{label}</label>
      <textarea
        className={`${className ? CssTextArea[className] : ""}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextArea