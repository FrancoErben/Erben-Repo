
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import '../App.css'

import { CartContext } from './CartContext';

const CartWidget = ()=>{
    const {calcItemsQty} = useContext(CartContext)
    return(
    < >
    <div>
    <Badge badgeContent={calcItemsQty()} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
    
    </div>
    </>
    )
}
export default CartWidget;