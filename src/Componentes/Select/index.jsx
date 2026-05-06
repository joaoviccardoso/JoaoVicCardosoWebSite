import CssStatusSelect from "./statusSelect.module.css"
 
const STATUS_OPTIONS = [
  { value: "desenvolvimento", label: "Desenvolvimento" },
  { value: "testes", label: "Testes" },
  { value: "criando_o_design", label: "Criando o design" },
  { value: "concluido", label: "Concluído" },
  { value: "pausado", label: "Pausado" },
]

 
function StatusSelect({ label, name, value, onChange}) {
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
          className={`${CssStatusSelect.selectBasic}`}
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