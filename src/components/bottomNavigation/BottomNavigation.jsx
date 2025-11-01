import React from 'react';
import './bottomNavigation.css';
import {Stack} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function BottomNavigation() {
  return (
    <Stack
      className="bottomNav"
      bgcolor={'white'}
      direction={'row'}
      justifyContent={'space-around'}
      position={'fixed'}
      bottom={0}
      width={'100%'}
    >
      <div className="times active">
        <AccessTimeFilledIcon fontSize={'medium'} />
      </div>
      <div className="quran">
        <MenuBookIcon fontSize={'medium'} />
      </div>
      <div className="profile">
        <AccountCircleIcon fontSize={'medium'} />
      </div>
    </Stack>
  );
}

export default BottomNavigation;
