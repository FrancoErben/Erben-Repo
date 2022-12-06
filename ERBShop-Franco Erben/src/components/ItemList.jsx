
import Item, { productos } from "./Item"


const ItemList= ({items})  =>{
    
    
    
    return(<>
    {
        
      items.length > 0
      ? items.map(item => <Item key={item.id}/>) :    
       
    }
    
    </>)
}
export default ItemList