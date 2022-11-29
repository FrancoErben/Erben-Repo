import ItemDetail from "./ItemDetail";
import { CustomFetch } from "../utils/customFetch";
import { productos } from "../utils/Producto";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () =>{
    
    const[detalles,setDetalles]=useState([{}])
    const {idItem }= useParams()

    useEffect(() => {
        CustomFetch(2000, productos.find(item => item.id === parseInt(idItem)))
            .then(result => setDetalles(result))
            .catch(err => console.log(err))
    }, []);
    console.log("id:",idItem)
    console.log("Detalles:",detalles)
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