import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import '../App.css'
import SimpleBadge from './Notificacion';
import BadgeOverlap from './Notificacion';
const CartWidget = ()=>{
    return(
    < >
    <div>
        <SimpleBadge classname="text-end px-3"></SimpleBadge>
    
    </div>
    </>
    )
}
export default CartWidget;