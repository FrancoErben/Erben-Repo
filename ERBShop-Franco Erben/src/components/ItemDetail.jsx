import { buttom } from "bootstrap";
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemDetail = (props) =>{
   const[itemCount , setItemCount]= useState(0);
   const onAdd =(qty) =>{
    alert("Seleccionaste " + qty + "unidades");
    setItemCount(qty)
    setEstadoCompra(true)
}
const [ estadoCompra , setEstadoCompra ] = useState (false)

    return(
        <>
        <div className="detail-container">
        <img className="detail-img" src={props.thumbnail} alt="detail-img"></img>
        <div className="detail-description">
        <h3 className="detail-titulo">{props.title}</h3>
         <div className="detail-info">

        <p>{props.description}</p>  <span>ID: {props.id}</span> <span>Stock: {props.stock}</span>
            
         </div>       
         <h3 className="detail-price">${props.price}</h3>

        </div>
       

        </div>
          {
            itemCount
            ? <ItemCount stock={props.stock} initial={itemCount} onAdd={onAdd}/>
            : <Link to='/cart' > <buttom >Comprar</buttom></Link>
            
          }
          {
            estadoCompra
            ? <ItemCount onAdd={onAdd}/>
            : <Link to='/cart' > <buttom >Comprar</buttom></Link> 

          }
        </>
    )
}

export default ItemDetail