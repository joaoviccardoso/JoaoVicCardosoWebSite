import CssImg from "./img.module.css"

function Image({ href, src, alt, width, height, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading="lazy"
        />
    </a>
        
  );
}

export default Image;