
import { Link } from "react-router-dom"


const Item =(props)=>{
    return(<>
    <Link to={`/Producto/${props.id}`} style={{cursor:"pointer"}}>
     <div className="producto-container rounded  border-primary border  ">
      <div >
        <img className="producto-img" src={props.thumbnail} alt="Product-Img"></img>
      </div>
      <div className="producto-descripcion">
        <h3 className="producto-titulo">{props.title}</h3>
      
      <div className="producto-info">
        <p>{props.description}</p>   <span >{props.id}</span>
      </div>
      <div >
        <h className="producto-price">{props.price}</h>
      </div>
      </div>


     </div>
     </Link></>
    )
}

export default Item





