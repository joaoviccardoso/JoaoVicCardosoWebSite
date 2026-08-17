import { useState } from "react";
import CssInput from "./input.module.css"

function Input({ label, type = "text", name, value, onChange, placeholder, className,disabled }) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password"
  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className={CssInput.containerInput}>
      <label>{label}</label>
      <div className={CssInput.inputWrapper}>  {/* ← envolve input + botão */}
        <input
          type={inputType}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`${CssInput.inputBasic} ${className ? CssInput[className] : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            className={CssInput.togglePassword}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input