import { Box, Grid2, Typography } from "@mui/material"

export const Features = () => {
  return (
    <Box py={30}
    sx={{
        bgcolor: '#0A1128'
    }}
    >
        <Box px={40} mt={3} 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
        }}
        >
            <Typography color="white" variant="h3"  textAlign='center' > Experience seamless performance and innovation at your fingertips.</Typography>
            <Typography color="white" variant="subtitle1"  textAlign='center' >Unlock the potential of your business with powerful tools designed to enhance productivity and drive growth.</Typography>
        </Box>

        <Grid2 container spacing={4} mt={17} px={4} >
            <Grid2 size={{xs: 12, md:4}}
            sx={{
                textAlign: 'center',
                // background: 'rgba(0,0,0,0.4)',
                p: 3,
                borderRadius: 5
            }}
            >
                <Box
      
                    component="img"
                    sx={{
                    height: 250,
                    // zIndex: 10,
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.4)',
                    p: 4,
                    borderRadius: 5
                    }}
                    alt="chart1"
                    src="src/assets/images/chart1.png"
        />

                <Box mt={3} >
                    <Typography color="white" variant="h6" fontWeight='bold' >Real-Time Financial Dashboard</Typography>
                    <Typography textAlign='center' color="grey" variant="body1"  >
                        Gain deep insights into your financial data with detailed, accurate reports that help you make informed decisions and drive success.
                    </Typography>
                </Box>
            </Grid2>

            <Grid2 size={{xs: 12, md:4}}
            sx={{
                textAlign: 'center',
                // background: 'rgba(0,0,0,0.4)',
                p: 3,
                borderRadius: 5
            }}
            >
                <Box
      
                    component="img"
                    sx={{
                    height: 250,
                    // zIndex: 10,
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.4)',
                    p: 4,
                    borderRadius: 5
                    }}
                    alt="chart1"
                    src="src/assets/images/chart3.png"
        />

                <Box mt={3} >
                    <Typography color="white" variant="h6" fontWeight='bold' >Expense Tracking System</Typography>
                    <Typography textAlign='center' color="grey" variant="body1"  >
                        Easily monitor and manage your expenses with a streamlined system that ensures accurate tracking and smarter budgeting for your business.
                    </Typography>
                </Box>
            </Grid2>

            <Grid2 size={{xs: 12, md:4}}
            sx={{
                textAlign: 'center',
                // background: 'rgba(0,0,0,0.4)',
                p: 3,
                borderRadius: 5
            }}
            >
                <Box
      
                    component="img"
                    sx={{
                    height: 250,
                    // zIndex: 10,
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.4)',
                    p: 4,
                    borderRadius: 5
                    }}
                    alt="chart1"
                    src="src/assets/images/chart2.png"
        />

                <Box mt={3} >
                    <Typography color="white" variant="h6" fontWeight='bold' >Automated Financial Reporting</Typography>
                    <Typography textAlign='center' color="grey" variant="body1"  >
                        Gain real-time insights into your business&apos;s financial health with automated reports, reducing manual effort and ensuring data accuracy.
                    </Typography>
                </Box>
            </Grid2>

        </Grid2>
    </Box>
  )
}
