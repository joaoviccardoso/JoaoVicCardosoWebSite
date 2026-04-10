import CssTextArea from "./textArea.module.css"

function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div className={CssTextArea.containerTextArea}>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextArea