import { useEffect } from "react"
import { useState } from "react"
import { productos } from "../utils/Producto"
import { CustomFetch } from "../utils/customFetch"
import Item from "./Item"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"

const ItemListContainer= ()  =>{
  const[datos,setDatos]=useState([])
  const{idCategory}= useParams()
  useEffect(()=>{
      if(idCategory== undefined){
       CustomFetch(2000,productos)
       .then(response => setDatos(response))
       .catch(err => console.log(err))
      } else{
          CustomFetch(2000,productos.filter(item=>item.categoryId===parseInt(idCategory)))
          .then(response => setDatos(response))
          .catch(err => console.log(err))  
      }
  },[idCategory])
 
    return(<>
      {
          datos.map(item=>(
              <Item
              title={item.title}
              thumbnail={item.thumbnail}
              id={item.id}
              />
          )
            
          )
      }
      
      </>)
}

export default ItemListContainer;