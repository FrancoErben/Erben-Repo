import { useEffect } from "react"
import { useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"
import { firestoneFetch } from "../utils/firestoreUtils"


const ItemListContainer= ()  =>{
  const[datos,setDatos]=useState([])
  const{idCategory}= useParams()
  useEffect(()=>{
        firestoneFetch(idCategory)
        .then(response =>setDatos(response))
        .catch(err =>console.log(err))
   } ,[idCategory])
 
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
