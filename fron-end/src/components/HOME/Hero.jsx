import { Box, Button, Chip, createTheme, Divider, responsiveFontSizes, Typography } from "@mui/material"


let theme = createTheme();
theme = responsiveFontSizes(theme)


// icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { ThemeProvider } from "@emotion/react";

export const Hero = () => {
  return (
    <ThemeProvider theme={theme} >
    <Box
    px={{xs: 3, sm: 5, md: 15, lg: 20}}
    py={10}
    // mt={12}
    

    >
        <Box
        px={{xs: 3, sm: 5, md: 10, lg: 15}}
        sx={{
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <Box // the chip to expense tracker
            sx={{marginX: 'auto'}}
            mb={3}
            >
                <Chip label="New! try our expense tracker for free" variant="outlined" 
                    icon={<AutoAwesomeIcon/>}
                    sx={{
                        color: 'white',
                        cursor: 'pointer',
                    }}
                    
                />
                <Chip icon={<NorthEastIcon/>}
                sx={{
                    cursor: 'pointer',
                }}
                />
            </Box>

            <Box // the hero text
            >
                <Typography textAlign='center' component='div' variant="h2" color="white" >
                    Revolutionize Your Finance tracking with {""} 
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
            </Box>

            <Box // call to action
            > 
            <Typography textAlign='center' my={1} color="white" >
            Manage your finances effortlessly with our cutting-edge platform. Gain control, make smarter decisions, and optimize your financial health with ease.            </Typography>
            
            <Box // hero buttons
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 6
            }}
            >
                <Button variant="contained" 
                sx={{ 
                    background: `linear-gradient(45deg, #8B5CF6, ${theme.palette.primary.light})`,
                }} 
                > get started</Button>
                <Button variant="outlined" > see demo</Button>
            </Box>

            <Box mt={5} >
                <Typography variant="subtitle1" textAlign='center'  color="grey" >
                    Trusted by <b  >+500</b> businesses to scale outbound sales and drive new revenue
                </Typography>
            </Box>

            </Box>
        </Box>

        <Box>
            
        </Box>

        <Divider sx={{color: 'white'}}  />
    </Box>
    </ThemeProvider>


  )
}
