import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../mock/RightNav';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';

const StyledBurger = styled.div`
  width: 16rem;
  height: 2rem;
  position: absolute;
  left: 0;
  z-index: 20;
  display: none;
  transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0%)'};
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  */}
  
`;

const SlidingMenu = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <Box
    sx={{
      width: 390,
      height: 802,

    }}
    >
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <SettingsIcon/>
      </StyledBurger>
      <RightNav open={open}/>
    </Box>
      
    </>
  )
}

export default SlidingMenu