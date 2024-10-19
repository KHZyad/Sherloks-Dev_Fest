
import { Box, Button,  createTheme,  Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField,  Typography } from '@mui/material'
// the signin illustration
import signupSVG from '/src/assets/svgs/Sign up-rafiki.svg';

import { Form } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme()


import { supabase } from '../../supabaseClient';




export const Signup = () => {
  const [role, setRole] = useState('')
  const [error, setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault();

    const submission = new FormData(e.target)
    const email = submission.get('email')
    const company_name = submission.get('company')
    const hashed_password = submission.get('password')
    const role = submission.get('role')



    try {
        
        // Sign up the user
        const { data: user, error: signupError } = await supabase.auth.signUp({
            email: email,
            password: hashed_password,
          });
          
          if (signupError) {
            console.error('Error signing up:', signupError);
          } else {
            const { error: insertError } = await supabase
              .from('user') // or the correct table name
              .insert([
                {
                  id: user.user.id, // Use the user's id from Supabase
                  email: email,
                  hashed_password: hashed_password, // Ensure you hash the password
                  role: 'user', // Set a default role or as per your logic
                  company_id: null, // Set as needed
                },
              ]);
          
            if (insertError) {
              console.error('Error inserting user into database:', insertError);
            }
          }
        if (error) throw error;

        // After signing up, create a company and link the user
        const { data: companyData, error: companyError } = await supabase
            .from('company')
            .insert([{ name: company_name }]);

        if (companyError) throw companyError;

        // Link the user to the newly created company
        const { error: userUpdateError } = await supabase
            .from('user')
            .insert([{
                email,
                hashed_password: user?.user_metadata?.hashed_password || hashed_password, // Store the hashed password or use a separate method to hash it
                company_id: companyData[0].id,
                role,
            }]);

        if (userUpdateError) throw userUpdateError;

        // alert('Sign-up successful!');
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
};


 
  

 const handleRoleChange = (e)=>{
    setRole(e.target.value)
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
    mt={-4}  
    px={{xs:4, lg: 8}}
      >

      <Stack direction={"row"} justifyContent="space-between" width="100%">
        <Box  alignContent="center">
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
          Create an account in few seconds 
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

      <Form onSubmit={handleSignUp} >
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


          name='name'
          InputProps={{
          sx: {
          borderRadius: '18px', // Adjust the border radius
          color: 'white',
          borderColor: theme.palette.primary.light
                },}}
          type='text'  placeholder="Enter your first name" label="name" variant="outlined" fullWidth required />
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


          name='company'
          InputProps={{
          sx: {
          borderRadius: '18px', // Adjust the border radius
          color: 'white',
          borderColor: theme.palette.primary.light
                },}}
          type='text'  placeholder="Your company name" label="company name" variant="outlined" fullWidth required />
        </FormControl>

        <FormControl fullWidth>
            <InputLabel id="role">Select role</InputLabel>
            <Select
            color='white'
    className='border'
    name='role'
    labelId="role"
    id="role"
    value={role}
    label="Select role"
    onChange={handleRoleChange}
    sx={{
        color: 'white',
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: 4,
        // Border styles
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.light, // Set the border color to light blue
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.light, // Ensure it stays light blue on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.light, // Light blue when focused
            },
        },
        // Label styles
        '& .MuiInputLabel-root': {
            color: theme.palette.primary.light, // Set label color to light blue
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.primary.light, // Label color on focus
        },
        // Adjust padding if needed
        '& .MuiSelect-select': {
            padding: '16.5px 14px', // Default padding
        },
    }}
>
    <MenuItem value='admin'>Admin</MenuItem>
    <MenuItem value='manager'>Manager</MenuItem>
</Select>

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
          <Button type="submit" size='large' variant="contained" fullWidth sx={{background: `linear-gradient(45deg, #8B5CF6, ${theme.palette.primary.light})`, minWidth: 100 ,maxWidth: 200, borderRadius: 3, margin: 'auto '}} >Sign up</Button>

        {/* <Typography color='white' textAlign={'center'}   variant='subtitle1' onClick={()=> navigate('../login')}  > Already have an account? <span style={{color:'blue', fontWeight: 'bold', cursor: 'pointer'}} > Sign in </span> to your account</Typography> */}
          

        {error && <p style={{ color: "red", cursor: 'pointer', textAlign: 'center' }}>{error}</p>}


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

