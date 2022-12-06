import { ResetTvOutlined } from "@mui/icons-material";
import { doc, serverTimestamp, setDoc , collection, updateDoc, increment} from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebaseConfig";

import { CartContext } from "./CartContext";

const Cart = () => {
    const   test=useContext(CartContext)
    const crearOrden=()=>{
      let order ={
        buyer:{
          nombre:'Martin Palermo',
          email:'Martinpalermo@hotmail.com',
          telefono:'22323432'
        },
        date: serverTimestamp(),
        productos: test.cartList.map(props=>({
          id: props.id,
          title: props.title,
          price: props.price,
          qty: props.qty
        })),
        total: test.calcTotal()
        
      }
       const createOrderInDB = async()=>{
        const newOrderRef= doc(collection(db,'orders'))
         await setDoc( newOrderRef, order);
       return newOrderRef

      }
      createOrderInDB()
      .then(result=>{
        alert('Tu orden fue creada con exito!, tu ID de orden es :' + result.id )  
      
              test.clear()}   )
      .catch(err=>console.log(err))
      
    }
    return (
        <>
               
               
               <Link to='/'><button className="m-3 buttonx" >Seguir comprando</button></Link>
                <h1 className="title-cart-principal m-2">Carrito</h1>  
               
           
            {
              test.cartList.length > 0 && 
              <div>
                    <button  className="m-2 borrar "  onClick={test.clear}>Borrar todo</button>
                    
                    
                    </div>   

           }  
           {
             test.cartList.length === 0
             ? <span className="vacio"> No hay productos en tu carrito de compras.</span>
             : test.cartList.map (props => 
               <div >
                   
                 <div className="cart-container border rounded border-primary m-1  ">
                  <div className="title cart-container ">
                
                   <img className="cart-img pt-4" src={props.img} alt=""></img>
                   <h2 className="car-title">{props.title}</h2>
                  
                      </div>
                   <div className="  ">
                      <div className="p-2"> <h3 className="cart-price ">$ {test.calcTotalPerItem(props.id)} </h3>
                      <span className="cart-qty">X{props.qty} unidades</span>
                      <div className="p-2 end"><button className=" buttonx" onClick={() => test.borrarItem(props.id)} >Eliminar producto</button></div></div>
                      </div>        
                    </div> 

                      
               </div>
               
                )
                

           }
           {
              test.cartList.length > 0 && 
              <div className="total-Container border rounded border-dark m-1 mt-3">
                    <h3 className="m-2">TOTAL A PAGAR : ${test.calcTotal()}  </h3>
                   
                    <div className="price-button"><button className="buttonx m-2"onClick={crearOrden} >Finalizar compra</button></div>
                     
                    
                    
                    </div>   

           }
                            
        </>
    );
}

export default Cart;