import CssMinhasHabilidades from "./minhasHabilidades.module.css"

function MinhasHabilidades({img, alt}){
    return(
        <div className={CssMinhasHabilidades.containerMinhasHabilidades}>
            <img src={img} alt={alt} />
        </div>
    )
}

export default MinhasHabilidades