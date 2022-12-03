import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import '../App.css'
import Cart from './Cart';
import { CartContext } from './CartContext';
import SimpleBadge from './Notificacion';
import BadgeOverlap from './Notificacion';
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