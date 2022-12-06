import ItemDetail from "./ItemDetail";
import { CustomFetch } from "../utils/customFetch";
import { productos } from "../utils/Producto";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { firestoneFetchOne } from "../utils/firestoreUtils";
const ItemDetailContainer = () =>{
    
    const[detalles,setDetalles]=useState([{}])
    const {idItem }= useParams()

    useEffect(() => {
        firestoneFetchOne(idItem)
       .then(response=>setDetalles(response))
       .catch(err=>console.log(err))

    }, []);
    
    return(<>
    
    <ItemDetail 
    title={detalles.title}
    thumbnail={detalles.thumbnail}
    description={detalles.description}
    id= {detalles.id}
    price={detalles.price} 
    stock={detalles.stock} />
    
    
    </>)
        
}

export default ItemDetailContainer