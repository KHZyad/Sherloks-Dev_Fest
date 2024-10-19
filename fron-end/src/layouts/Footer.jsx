import {  Box, createTheme, Grid2, IconButton,  Typography } from '@mui/material'
// import {  makeStyles } from '@mui/styles';
import logo from '/src/assets/svgs/logo2.svg'

// social icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import { ThemeProvider } from '@emotion/react';

// const useStyles = makeStyles((theme)=>{
//     return {
//       socialBtn:{
            
//         color: 'white',
//         '&:hover': {
//           color: theme.palette.primary.main,
//         },
//         width: 10,
//         height: 48,
//       },
//       footerText:{
//         color: theme.palette.primary.light
//       }
//     }
    
// })

const theme = createTheme()


export const Footer = () => {
    // const classes = useStyles()

  return (
   <ThemeProvider theme={theme}>
   <Grid2 container
    sx={{
        // background: 'linear-gradient(135deg, #0A1128 60%, #034078 140%)',
        background: `linear-gradient(to bottom, #0A1128 10%, ${theme.palette.primary.light} 240%)`,
        pb: 5
        // background: "linear-gradient(60deg, #00b894, #1dd1a1)",

    }}
  //  spacing={8}
   pb={4}
   >
    <Grid2  size={{xs:12, md:6}}  
      sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      }}
        >
          <Box
      
            component="img"
            sx={{
            height: 100,
            zIndex: 10,
            ml: {xs: 0, sm: 1, md:4}
            }}
            alt="logo"
            src={logo}
        />
            <Typography 
            variant="h3"
            align="center"
            color="black"
            zIndex={2}
            ml={2}
            style={{
                fontFamily: 'Quicksand, Arial, sans-serif' 
            }}
              fontWeight='bold'
              >
              <span
                    style={{

                        background: `linear-gradient(45deg, ${theme.palette.primary.light} 20%, #8B5CF6 50%)`,
                        WebkitBackgroundClip: "text", // For WebKit browsers like Chrome and Safari
                        WebkitTextFillColor: "transparent", // For WebKit browsers
                        backgroundClip: "text", // Ensures the background gradient is clipped to text
                        color: "transparent", // Makes sure the text is transparent to show the gradient
                    }}
                    >
                    Bankerboard
                </span>
            </Typography>       

    </Grid2>
    <Grid2  size={{xs:12, md:6}} 
    
    sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3
                }}>
        <IconButton > <FacebookIcon  
        sx={
          {      
          color: 'white',
          '&:hover': {
            color: 'primary.light',
          },
          width: 42,
          height: 42,
          }
        }  /> </IconButton>
        <IconButton > <InstagramIcon  
        sx={
          {      
          color: 'white',
          '&:hover': {
            color: 'primary.light',
          },
          width: 42,
          height: 42,
          }
        }  /> </IconButton>      
        <IconButton > <XIcon 
        sx={
          {      
          color: 'white',
          '&:hover': {
            color: 'primary.light',
          },
          width: 42,
          height: 42,
          }
        }  /> </IconButton>        
        <IconButton > <GoogleIcon 
        sx={
          {      
          color: 'white',
          '&:hover': {
            color: 'primary.light',
          },
          width: 42,
          height: 42,
          }
        }  /> </IconButton>

    </Grid2>

    <Grid2  size={12} 
    
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: {xs: 5, md:2}
        }}>
      <Typography variant='subtitle' 
    //   color="textSecondary"
      sx={{
        color: "#777777", 
        '&:hover': {
          color: 'white',
        },}} >All rights reserved</Typography>
    </Grid2>


   </Grid2>
   </ThemeProvider>

  )
}
