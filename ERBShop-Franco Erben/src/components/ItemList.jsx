import { useEffect } from "react"
import { useState } from "react"
import Item, { productos } from "./Item"
import { CustomFetch } from "../utils/customFetch"
import Producto from "../utils/Producto"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"

const ItemList= ({items})  =>{
    
    
    
    return(<>
    {
        
      items.length > 0
      ? items.map(item => <Item key={item.id}/>) :    
       
    }
    
    </>)
}
export default ItemList