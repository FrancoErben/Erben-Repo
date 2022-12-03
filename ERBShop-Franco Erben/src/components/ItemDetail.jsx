import { buttom } from "bootstrap";
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import { CartContext } from "./CartContext";
const ItemDetail = (props) =>{
    const{addToCart}= useContext(CartContext)
    const[itemCount , setItemCount]= useState(0);
    const [ estadoCompra , setEstadoCompra ] = useState (false)
    const onAdd =(qty) =>{
       Swal.fire('Seleccionaste ' + qty + ' unidades');
     setItemCount(qty)
     setEstadoCompra(true)
     addToCart(props,qty)
 }
 
 

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
          <div className="containerBoton">
          {
              !estadoCompra
              ? <ItemCount  stock={props.stock} initial={itemCount} onAdd={onAdd}/>
              : <div className="Compra ">
                <Link to='/cart' style={{textDecoration: "none"}}> <buttom  className='comprar p-2 border border-primary   '>Comprar</buttom></Link>
                <Link to='/'><button className="m-2 buttonx">Seguir comprando </button></Link>
              </div>

          }</div>
        </>
    )
   
}

export default ItemDetail