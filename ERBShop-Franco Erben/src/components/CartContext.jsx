
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()


const CartContextProvider = (props )=> {
    
    const [cartList,setCartList] = useState([])
    const addToCart=(props , qty)=>{
        let found = cartList.find(product=>product.id===props.id)
        if(found){
            const updatedCart = cartList.map((prod)=>{
                if(prod.id === props.id){
                    return {...prod, qty:prod.qty + qty}
                }
            })
            setCartList(updatedCart)
    
            }else{
                setCartList([...cartList,
                    {id: props.id,
                    title: props.title,
                    stock: props.stock,
                    price: props.price,
                      qty:qty,
                   img: props.thumbnail  }])
            }
}
const clear = ()=> {
    setCartList([])
}
const borrarItem = (id)=>{
    let nuevaLista = cartList.filter(props=>props.id !==id)
    setCartList(nuevaLista)
}
const calcTotalPerItem = (id) => {
    let index = cartList.map(props => props.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
}

const calcItemsQty = () => {
    let qtyS = cartList.map(props => props.qty)
    return qtyS.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
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