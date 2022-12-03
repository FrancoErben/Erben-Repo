import { PropaneSharp } from "@mui/icons-material";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()


const CartContextProvider = (props )=> {
 
    const [cartList,setCartList] = useState([])
const addToCart=(props , qty)=>{
    let found = cartList.find(product=>product.id===props.id)
    if(!found){
    setCartList([...cartList,
        {id: props.id,
        title: props.title,
        stock: props.stock,
        price: props.price,
          qty:qty,
       img: props.thumbnail  }])

        }else{
            setCartList([...cartList, {...found, qty: qty+qty}])

            
        }}
const clear = ()=> {
    setCartList([])
}
const borrarItem = (id)=>{
    let nuevaLista = cartList.filter(props=>props.id !=id)
    setCartList(nuevaLista)
}
const calcTotalPerItem = (id) => {
    let index = cartList.map(props => props.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
}
const calcItemsQty = () => {
    return cartList.reduce((acc, prod) => acc += prod.qty,0)
  }
const calcTotal = () => {
    let totalPerItem = cartList.map(props => calcTotalPerItem(props.id));
    return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}
return(<>
   
<CartContext.Provider value={{cartList,calcTotal, calcItemsQty,addToCart,clear,borrarItem,calcTotalPerItem,setCartList}} >
    {props.children}
</CartContext.Provider>

</>
 )



}

export default CartContextProvider