import CssTextArea from "./textArea.module.css"

function TextArea({ label, name, value, onChange, placeholder, className }) {
  return (
    <div className={CssTextArea.containerTextArea}>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${CssTextArea.textAreaDe} ${className ? CssTextArea[className] : ""}`}
      />
    </div>
  );
}

export default TextArea