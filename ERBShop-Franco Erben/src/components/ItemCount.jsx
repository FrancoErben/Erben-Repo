
import {button } from 'bootstrap';
import { useEffect, useState } from 'react';
import '../App.css'

const ItemCount = ({ stock  , initial = 0 , onAdd})=>{
    
const [cantidad, setCantidad]= useState(0);

useEffect(()=>{
    setCantidad(initial)
},[]);


 const Menos = () =>{
 if(cantidad > initial){
    setCantidad(cantidad-1)
}}
 const Mas = () =>{  
    if (cantidad < stock) {setCantidad(cantidad+1)
}}

return(<>
<div className='ItemsCount'>
 <div className='Itemcount border border-2 border-dark   '>
     <button  className='border-0 boton' onClick={Menos}><img  className="icons border-0" src="https://cdn-icons-png.flaticon.com/128/6998/6998808.png" alt=""  /></button>
     <span className='cantidad p-3'>{cantidad}</span>
     <button  className='border-0 boton' onClick={Mas}><img  className="icons " src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="" /></button>
 </div>
 
      {
        stock && cantidad 
        ?<button className='agregar   border-l border-primary   '   onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
        : <button className='border-l agregar border-danger' color='red'  disabled >Ingrese productos</button>
      } 

</div>
</>
)


}
;
export default ItemCount

