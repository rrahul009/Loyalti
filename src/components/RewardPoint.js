import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const RewardPoint = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{
        color: 'white',
      }}
    >
      <Grid item>
        <img
          style={{
            position: 'absolute',
            width: '73px',
            height: '30.82px',
            left: '20px',
            top: '29.39px',
          }}
          src='https://i.ibb.co/bWM2D0m/Kloudrac-LOGO.png'
          alt='kloudrac Logo'
        />
      </Grid>

      <Grid item sx={{ mt: 11, textAlign: 'center' }}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
        >
          <Grid item sx={{ mt: '-40px' }}>
            <h1>Welcome to</h1>
          </Grid>
          <Grid item sx={{ mt: '-45px' }}>
            <h1>Kloudrac's</h1>
          </Grid>
          <Grid item sx={{ mt: '10px' }}>
            <h3>Loyalty Program App</h3>
          </Grid>

          <Grid
            item
            sx={{ color: 'white', textAlign: 'center', mt: '40px' }}
          >
            <p
              style={{
                padding: '15px',
                margin: 0,
                display: 'inline',
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
            >
              Avail Reward Points and Opportunities
            </p>
          </Grid>
          <Grid item sx={{ marginTop: '50px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='row'
            >
              <Grid item>
                <img
                  src='https://i.ibb.co/t8Yyw2V/coin.png'
                  alt='coins'
                  style={{ height: '40px' }}
                />
              </Grid>
              <Grid item>
                <h3>100 Points=</h3>
              </Grid>
              <Grid item sx={{ color: 'green' }}>
                <img
                  src='https://i.ibb.co/gj6dGDn/ruppee.png'
                  alt='ruppes'
                  style={{ height: '40px' }}
                />
              </Grid>
              <Grid item>
                <h3>10 Rupees</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: '100px', marginBottom: '130px' }}>
           <Link to='/signupverify'>
              <Button
                variant='contained'
                sx={{
                  width: '300px',
                  height: '40px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  color: 'blue',
                }}
              >
                NEXT
              </Button>
              </Link>
              
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RewardPoint;
