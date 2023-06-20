import { Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import './signupverify.css';
import { Link } from 'react-router-dom';

const SignupVerify = () => {
  return (
    <>
      <Grid container className='header' justifyContent='center' alignItems='center' direction="row">
        <Grid item>
          <img
            src='https://i.ibb.co/bWM2D0m/Kloudrac-LOGO.png'
            alt='kloudrac logo'
            style={{
              position: 'absolute',
              width: '73px',
              height: '30.82px',
              left: '10px',
              top: '10.39px'
            }}
          />
        </Grid>
        <Grid item sx={{ marginTop: '50px' }}>
          <Grid container direction="column">
            <Grid item>
              <h2>Loyalty</h2>
            </Grid>
            <Grid item sx={{ marginTop: '-30px' }}>
              <h2>Program App</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src='https://i.ibb.co/vQ8rDjY/Main-Vector.png' alt='Loading' style={{ height: '150px' }} />
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ height: '600px', padding: '2px' }}>
     
        <Grid container justifyContent='center' direction='column' alignItems='center'>
        <Grid item sx={{ display: 'flex' }}>
            <Grid container direction='column' sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Grid item  >
                <h2>Sign Up.</h2>
              </Grid>
              <Grid item sx={{ marginTop: '-30px', }}>
                <p>Become a member</p>
              </Grid>
            </Grid>
          </Grid>
          

          <Grid item sx={{ width: '300px' }}>
            <TextField
              fullWidth
              id="fullWidth"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '80px',
                  height: '45px'


                },
              }}
              InputProps={{
                endAdornment: (
                  <Grid item direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:'-5px' }}>
                    <Button variant="" fullWidth sx={{ borderRadius: '80px', marginRight: '70px' }}>
                      Company
                    </Button>
                    <Button variant="" fullWidth sx={{ borderRadius: '80px', backgroundColor: 'white' }}>
                      Invitation
                    </Button>
                  </Grid>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <p style={{marginLeft:'10px'}}>Become  a member</p>
            <Grid item>
            <TextField 
              fullWidth
              label='Enter your code'
              sx={{ marginLeft: '10px', marginRight: '10px', width: '300px'}}
              />
              </Grid>

          </Grid>
          <Grid item sx={{ marginTop: '20px' }}>
            <Link to='/login'>
            <Button
              variant='contained'
              size='large'
             sx={{ width: '300px', backgroundColor: '#123456', textTransform:'none' }}
            >
            Verify
            </Button>
            </Link>

          </Grid>
          <Grid item sx={{textTransform:'none'}}><p >Already  have a account?<Button sx={{textTransform:'none'}}> Login</Button></p></Grid>


        </Grid>
      </Paper>

    </>
  );
};

export default SignupVerify;
