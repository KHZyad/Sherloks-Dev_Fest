import { Box, createTheme, Grid2, IconButton, Typography } from "@mui/material"

import manSVG from '../../assets/svgs/Crypto portfolio-bro (2).svg'
import { ThemeProvider } from "@emotion/react"

// icons
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';

const theme = createTheme()

export const Explore = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box 
    sx={{
        bgcolor: '#0A1128',
        py: 5
    }}
    >
        <Grid2 container >
            <Grid2
            size={{xs: 12, md:6}}
            px={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                py: 4
            }}
            >
                <Box px={6} >
                <Typography  variant="h4" textTransform='capitalize'color="white"  >
                    Precision in the digital age, Your journey begins here
                </Typography>
                <Typography mt={1} color="grey" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, necessitatibus.</Typography>
                </Box>

                <Grid2 container mt={2} columnSpacing={2} rowSpacing={4} >
                <Grid2 size={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    gap: 2
                }}
                
                >
                    <IconButton
                    sx={{ 
                        border: `1px solid ${theme.palette.primary.light}`,
                        borderRadius: '50%',

                    }}
                    >
                        <BuildOutlinedIcon 
                        sx={{ 
                            color: 'white',
                            bgcolor: 'transparent',


                        }}
                        />
                    </IconButton>

                    <Typography fontWeight='bold' color="white" >Easy to manage</Typography>
                    <Typography color="grey" textAlign='center' >Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Grid2>
                <Grid2 size={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    gap: 2
                }}
                
                >
                    <IconButton
                    sx={{ 
                        border: `1px solid ${theme.palette.primary.light}`,
                        borderRadius: '50%',

                    }}
                    >
                        <GroupsOutlinedIcon 
                        sx={{ 
                            color: 'white',
                            bgcolor: 'transparent',


                        }}
                        />
                    </IconButton>

                    <Typography fontWeight='bold' color="white" >Collaborate Securely</Typography>
                    <Typography color="grey" textAlign='center' >Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Grid2>
                <Grid2 size={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    gap: 2
                }}
                
                >
                    <IconButton
                    sx={{ 
                        border: `1px solid ${theme.palette.primary.light}`,
                        borderRadius: '50%',

                    }}
                    >
                        <TrendingUpOutlinedIcon 
                        sx={{ 
                            color: 'white',
                            bgcolor: 'transparent',


                        }}
                        />
                    </IconButton>

                    <Typography fontWeight='bold' color="white" >Real Time analysis</Typography>
                    <Typography color="grey" textAlign='center' >Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Grid2>
                <Grid2 size={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    gap: 2
                }}
                
                >
                    <IconButton
                    sx={{ 
                        border: `1px solid ${theme.palette.primary.light}`,
                        borderRadius: '50%',

                    }}
                    >
                        <QuickreplyOutlinedIcon 
                        sx={{ 
                            color: 'white',
                            bgcolor: 'transparent',


                        }}
                        />
                    </IconButton>

                    <Typography fontWeight='bold' color="white" >24/7 Support</Typography>
                    <Typography color="grey" textAlign='center' >Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Grid2>
                </Grid2>

            </Grid2>
            <Grid2
            size={{xs: 12, md:6}}
            >
            <Box
            component='img'
            src={manSVG}
            />

           </Grid2>
        </Grid2>


        <Grid2 container >
            <Grid2
            size={{xs: 12, md:6}}
            >


            </Grid2>
            <Grid2
            size={{xs: 12, md:6}}
           >


           </Grid2>
        </Grid2>
    </Box>
    </ThemeProvider>

  )
}
