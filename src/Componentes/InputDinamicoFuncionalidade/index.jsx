import { useState } from "react";
import styles from "./FuncionalidadesInput.module.css";

/**
 * Componente reutilizável para adicionar funcionalidades dinamicamente.
 *
 * Props:
 * - value: array de funcionalidades [{ titulo: "", descricao: "" }]
 * - onChange: função chamada com o novo array ao alterar
 * - label: string (opcional) — rótulo do grupo
 * - max: número máximo de funcionalidades (padrão: 10)
 */
function FuncionalidadesInput({ value = [], onChange, label = "Funcionalidades", max = 10 }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    function handleAdd() {
        if (value.length >= max) return;
        const novaLista = [...value, { titulo: "", descricao: "" }];
        onChange(novaLista);
        setExpandedIndex(novaLista.length - 1);
    }

    function handleRemove(index) {
        const novaLista = value.filter((_, i) => i !== index);
        onChange(novaLista);
        if (expandedIndex === index) setExpandedIndex(null);
        else if (expandedIndex > index) setExpandedIndex(expandedIndex - 1);
    }

    function handleFieldChange(index, field, newValue) {
        const novaLista = value.map((item, i) =>
            i === index ? { ...item, [field]: newValue } : item
        );
        onChange(novaLista);
    }

    function toggleExpand(index) {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.groupLabel}>{label}</label>}

            <div className={styles.lista}>
                {value.map((func, index) => (
                    <div key={index} className={styles.card}>
                        <div
                            className={styles.cardHeader}
                            onClick={() => toggleExpand(index)}
                        >
                            <div className={styles.cardHeaderLeft}>
                                <span className={styles.badge}>{index + 1}</span>
                                <span className={styles.cardTitulo}>
                                    {func.titulo || `Funcionalidade ${index + 1}`}
                                </span>
                            </div>
                            <div className={styles.cardHeaderRight}>
                                <button
                                    type="button"
                                    className={styles.btnRemover}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemove(index);
                                    }}
                                    title="Remover"
                                >
                                    ✕
                                </button>
                                <span className={`${styles.chevron} ${expandedIndex === index ? styles.chevronOpen : ""}`}>
                                    ▾
                                </span>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <div className={styles.cardBody}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.fieldLabel}>Título</label>
                                    <input
                                        type="text"
                                        className={styles.fieldInput}
                                        placeholder="Ex: Autenticação de Usuário"
                                        value={func.titulo}
                                        onChange={(e) =>
                                            handleFieldChange(index, "titulo", e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.fieldLabel}>Descrição</label>
                                    <textarea
                                        className={styles.fieldTextarea}
                                        placeholder="Descreva o que essa funcionalidade faz..."
                                        value={func.descricao}
                                        rows={3}
                                        onChange={(e) =>
                                            handleFieldChange(index, "descricao", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button
                type="button"
                className={styles.btnAdicionar}
                onClick={handleAdd}
                disabled={value.length >= max}
            >
                <span className={styles.btnAdicionarIcon}>+</span>
                Adicionar Funcionalidade
                <span className={styles.contador}>{value.length}/{max}</span>
            </button>
        </div>
    );
}

export default FuncionalidadesInput;