import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const  { cartList ,clear ,borrarItem,nuevaLista,qyt,calcTotal,calcTotalPerItem}=useContext(CartContext)
    return (
        <>
               
               
               <Link to='/'><button className="m-3 buttonx" >Seguir comprando</button></Link>
                <h1 className="title-cart-principal m-2">Carrito</h1>  
               
           
            {
              cartList.length > 0 && 
              <div>
                    <button  className="m-2 borrar "  onClick={clear}>Borrar todo</button>
                    
                    
                    </div>   

           }  
           {
             cartList.length === 0
             ? <span className="vacio"> No hay productos en tu carrito de compras.</span>
             : cartList.map (props => 
               <div >
                   
                 <div className="cart-container border rounded border-primary m-1  ">
                  <div className="title cart-container ">
                
                   <img className="cart-img pt-4" src={props.img} alt=""></img>
                   <h2 className="car-title">{props.title}</h2>
                  
                      </div>
                   <div className="  ">
                      <div className="p-2"> <h3 className="cart-price ">$ {calcTotalPerItem(props.id)} </h3>
                      <span className="cart-qty">X{props.qty} unidades</span>
                      <div className="p-2 end"><button className=" buttonx" onClick={() => borrarItem(props.id)} >Eliminar producto</button></div></div>
                      </div>        
                    </div> 

                      
               </div>
               
                )
                

           }
           {
              cartList.length > 0 && 
              <div className="total-Container border rounded border-dark m-1 mt-3">
                    <h3 className="m-2">TOTAL A PAGAR : ${calcTotal()}  </h3>
                   
                    <div className="price-button"><button className="buttonx m-2" >Finalizar compra</button></div>
                     
                    
                    
                    </div>   

           }
                            
        </>
    );
}

export default Cart;