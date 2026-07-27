import CssMinhasHabilidades from "./minhasHabilidades.module.css"

function MinhasHabilidades({img, alt, key}){
    return(
        <div className={CssMinhasHabilidades.containerMinhasHabilidades} key={key}>
            <img src={img} alt={alt} />
        </div>
    )
}

export default MinhasHabilidades