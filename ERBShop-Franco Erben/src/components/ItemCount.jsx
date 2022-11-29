
import { buttom } from 'bootstrap';
import { useEffect, useState } from 'react';
import '../App.css'

const ItemCount = ({ stock = 0 , initial = 0, onAdd})=>{
    
const [cantidad, setCantidad]= useState(0);
useEffect(()=>{
    setCantidad(initial)
},[]);


const Menos = () =>{
if(cantidad> initial+1){
    setCantidad(cantidad-1)
} 
const Mas = () =>{  
    if (cantidad < stock) {setCantidad(cantidad+1)
}}

return(<>
<div className='ItemsCount'>
 <div className='Itemcount border border-2 border-dark   '>
     <buttom variant="text" className='border-0 boton' onClick={Menos}><img  className="icons border-0" src="https://cdn-icons-png.flaticon.com/128/6998/6998808.png" alt=""  /></buttom>
     <span className='cantidad p-3'>{cantidad}</span>
     <buttom variant="text" className='border-0 boton' onClick={Mas}><img  className="icons " src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="" /></buttom>
 </div>
 
      {
        stock && cantidad 
        ?<buttom variant="contained" className='agregar  Carrito border  border-dark p-1 mt-3  '  onClick={()=> onAdd(cantidad)}>Agregar al carrito</buttom>
        : <buttom variant="contained" className='agregar   Carrito border  border-dark p-1 mt-3 ' disabled >Agregar al carrito</buttom>
      } 

</div>
</>
)


}
};
export default ItemCount

