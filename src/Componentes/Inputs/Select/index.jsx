import CssStatusSelect from "./statusSelect.module.css"

function StatusSelect({ label, name, value, onChange, STATUS_OPTIONS, className}) {
  return (
    <div className={CssStatusSelect.containerSelect}>
      <label>{label}</label>
      <div className={CssStatusSelect.selectWrapper}>
        <span
          className={`${CssStatusSelect.statusDot} ${value ? CssStatusSelect[value] : ""}`}
        />
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          className={`${CssStatusSelect.selectBasic} ${className ? CssStatusSelect[className] : ""}`}
        >
          <option value="" disabled>Selecionar status...</option>
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default StatusSelect