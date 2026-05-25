import { useRef, useState } from "react";
import styles from "./imagemPrincipalInput.module.css";

/**
 * Componente reutilizável para upload da imagem principal do projeto.
 *
 * Props:
 * - value: File | null — arquivo de imagem selecionado
 * - onChange: função chamada com o File ao selecionar, ou null ao remover
 * - label: string (opcional) — rótulo do campo
 * - accept: string (opcional) — tipos aceitos (padrão: "image/*")
 */
function ImagemPrincipalInput({
    value = null,
    onChange,
    label = "Imagem Principal",
    accept = "image/*",
}) {
    const inputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);
    const [preview, setPreview] = useState(null);

    function handleFile(file) {
        if (!file || !file.type.startsWith("image/")) return;
        const url = URL.createObjectURL(file);
        setPreview(url);
        onChange(file);
    }

    function handleInputChange(e) {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }

    function handleRemove(e) {
        e.stopPropagation();
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
        onChange(null);
        if (inputRef.current) inputRef.current.value = "";
    }

    function handleDrop(e) {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    }

    function handleDragOver(e) {
        e.preventDefault();
        setDragOver(true);
    }

    function handleDragLeave() {
        setDragOver(false);
    }

    function handleClick() {
        if (!preview) inputRef.current?.click();
    }

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.groupLabel}>{label}</label>}

            <div
                className={`${styles.dropZone} ${dragOver ? styles.dragOver : ""} ${preview ? styles.hasImage : ""}`}
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    className={styles.hiddenInput}
                    onChange={handleInputChange}
                />

                {preview ? (
                    <div className={styles.previewWrapper}>
                        <img
                            src={preview}
                            alt="Preview da imagem principal"
                            className={styles.previewImg}
                        />
                        <div className={styles.previewOverlay}>
                            <button
                                type="button"
                                className={styles.btnTrocar}
                                onClick={() => inputRef.current?.click()}
                            >
                                <span>↑</span> Trocar imagem
                            </button>
                            <button
                                type="button"
                                className={styles.btnRemover}
                                onClick={handleRemove}
                            >
                                <span>✕</span> Remover
                            </button>
                        </div>
                        <div className={styles.previewBadge}>
                            <span className={styles.badgeDot} />
                            {value?.name ?? "imagem selecionada"}
                        </div>
                    </div>
                ) : (
                    <div className={styles.placeholder}>
                        <div className={styles.iconWrap}>
                            <svg
                                className={styles.uploadIcon}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                        </div>
                        <p className={styles.placeholderTitle}>
                            {dragOver ? "Solte a imagem aqui" : "Arraste ou clique para enviar"}
                        </p>
                        <p className={styles.placeholderSub}>
                            PNG, JPG, WEBP — recomendado 1280×720px
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImagemPrincipalInput;