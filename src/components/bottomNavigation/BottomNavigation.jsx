import React from 'react';
import './bottomNavigation.css';
import {Stack} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';


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
        <Link to="prayer-times" className='link'>
          <AccessTimeFilledIcon fontSize={'medium'} className="icon" />
          <span>اوقات الصلاة</span>
        </Link>
      </div>
      <div className="quran">
        <Link to="prayer-times/quran" className='link'>
          <MenuBookIcon fontSize={'medium'} className="icon" />
          <span>القران الكريم</span>
        </Link>
      </div>
      <div className="profile">
        <Link to="prayer-times/profile" className='link'>
          <AccountCircleIcon fontSize={'medium'} className="icon" />
          <span>الحساب</span>
        </Link>
      </div>
    </Stack>
  );
}

export default BottomNavigation;
