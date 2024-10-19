import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router';
import { NavigationList } from '../components/NAVBAR/NavigationList';
import { Button } from '@mui/material';


import logo from '/src/assets/svgs/logo2.svg'


export const Navigation = ()=> {
  

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
      sx={{ 
        background: "transparent",
    }}
      >
        <Toolbar>
         
          

          <Box
          component='img'
          src={logo}
          sx={{
            height: 100,
            p: 2
          }}
          >

          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavigationList/>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button variant='outlined' color='success' 
            sx={{
                color: 'white',
                borderColor: 'white'
            }}
            >
                Subscribe now
            </Button>
          </Box>
          
         
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  );
}
