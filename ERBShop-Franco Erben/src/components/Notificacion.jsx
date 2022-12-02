import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export default function SimpleBadge() {
  const CartW = useContext(CartContext)
  return (
    <Badge badgeContent={CartW.calcItemsQty} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
  );
}
