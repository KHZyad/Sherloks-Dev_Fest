import { Box, Button,  createTheme,  Divider, FormControl, Stack, TextField,  Typography } from '@mui/material'
// the signin illustration
import signupSVG from '/src/assets/svgs/Tablet login-bro.svg';

import { Form } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { supabase } from '/supabaseClient';


const theme = createTheme()


export const Login = () => {

    const signInUser = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      
        if (error) {
          console.error('Error during sign in:', error.message);
        } else {
          console.log('User signed in:', data);
        }
      };

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        
    const submission = new FormData(e.target)
    const email = submission.get('email')
    const password = submission.get('password')

    signInUser(email, password);
    
    

    }
 
 
  return (
    <ThemeProvider theme={theme}>
   <Stack  height="auto" py={17}  direction={{xs:"column", md:"row"}} justifyContent="space-between" alignItems="center"
   sx={{
    background: 'linear-gradient(to top, #0A1128 30%, transparent 70%)'
}}
   >
    <div id="gradient-bg" ></div>


    

    <Box 
    sx={{width: {xs: "100%", md: "60%"}}}
    px={{xs:4, lg: 8}}
      >

      <Stack direction={"row"} justifyContent="space-between" width="100%">
        <Box mb={5}  alignContent="center">
          <Typography color='white'  variant="h4"  component="p"  fontWeight={700} gutterBottom>
          Welcome to {" "}
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

          <Typography color='grey'  variant="h6"  component="p" fontWeight={700}  gutterBottom>
          Register to Your account and get unlimited access to our tools 
          </Typography> 
        </Box>

        {/* <Box
            
            component="img"
            sx={{
            mr: 0,
            height:{xs: 150, sm: 210, md: 230, lg: 250, xl: 300},
            width: "auto",
            zIndex: 2
            }}
            alt="logo"
            src="images/navbar/logo3.png"
        /> */}

      </Stack>

      <Form onSubmit={handleFormSubmit} >
        <Stack
          sx={{mt: 3 , display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 500}}

        >

        <FormControl 
            > 
          <TextField  
            sx={{
                '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.primary.light, // Default border color
                }
                },
                '& .MuiInputLabel-root': {
                color: 'gray', // Default label color
                }
            }}


          name='email'
          InputProps={{
          sx: {
          borderRadius: '18px', // Adjust the border radius
          color: 'white',
          borderColor: theme.palette.primary.light
                },}}
          type='email'  placeholder="Enter your Email" label="email" variant="outlined" fullWidth required />
        </FormControl>


        <FormControl 
            > 
          <TextField 
          sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.light, // Default border color
            }
            },
            '& .MuiInputLabel-root': {
            color: 'gray', // Default label color
            }
            }}
          name='password' 
          InputProps={{
          sx: {
            borderRadius: '18px', // Adjust the border radius
            color: 'white'
              },}}
          type="password" placeholder="Enter password" label="Password" variant="outlined" fullWidth required />
        </FormControl>
          <Button type="submit" size='large' variant="contained" fullWidth sx={{background: `linear-gradient(45deg, #8B5CF6, ${theme.palette.primary.light})`, minWidth: 100 ,maxWidth: 200, borderRadius: 3, margin: 'auto '}} >Login</Button>

        {/* <Typography color='white' textAlign={'center'}   variant='subtitle1' onClick={()=> navigate('../login')}  > Already have an account? <span style={{color:'blue', fontWeight: 'bold', cursor: 'pointer'}} > Sign in </span> to your account</Typography> */}
          

        {/* {actionData?.error && <p style={{ color: "red", cursor: 'pointer', textAlign: 'center' }}>{actionData.error}</p>} */}


        </Stack>
      </Form>  
          
    </Box>

    <Divider orientation="vertical" variant='middle' flexItem />

    <Box component="img" src={signupSVG} 
      sx={{height:"auto", maxWidth: {xs: "100%",md:"40%"}}} 
    />
    

   </Stack>
   </ThemeProvider>


  )
}

