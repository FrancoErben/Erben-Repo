import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
  );
}
