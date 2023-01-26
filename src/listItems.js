import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton onclick={"name"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Marchands" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <VolunteerActivismIcon />
      </ListItemIcon>
      <ListItemText primary="Donateurs" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Cartes" />
    </ListItemButton>
  </React.Fragment>
);