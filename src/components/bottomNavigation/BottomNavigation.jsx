import React from 'react';
import './bottomNavigation.css';
import {Stack} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';

export function BottomNavigation() {
  let navigate = useNavigate();
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
      <div
        className="quran"
        onClick={() => {
          navigate('/prayer-times/quran');
        }}
      >
        {/* <Link to='/prayer-times/quran'>
        </Link> */}
        <MenuBookIcon fontSize={'medium'} />
      </div>
      <div className="profile">
        <AccountCircleIcon fontSize={'medium'} />
      </div>
    </Stack>
  );
}

export default BottomNavigation;
