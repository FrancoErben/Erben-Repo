
import { useState } from 'react';
import '../App.css'

const ItemCount = ()=>{
const [cantidad, setCantidad]= useState(0);
const Menos = () =>{
setCantidad(cantidad-1)
} 
const Mas = () =>{
    setCantidad(cantidad+1)
}

return(<>
<div className='ItemsCount'>
 <div className='Itemcount border border-2 border-dark   '>
     <button className='border-0 boton' onClick={Menos}><img  className="icons border-0" src="https://cdn-icons-png.flaticon.com/128/6998/6998808.png" alt=""  /></button>
     <span className='cantidad p-3'>{cantidad}</span>
     <button  className='border-0 boton' onClick={Mas}><img  className="icons " src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="" /></button>
 </div>
       <button className='agregar border-0'><p className=' Carrito border  border-dark p-1 mt-3 '>Agregar al carrito</p></button>
</div>
</>
)


};
export default ItemCount