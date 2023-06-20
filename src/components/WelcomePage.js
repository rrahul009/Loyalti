import React from 'react';
import { Grid, Button } from '@mui/material';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    const handleChange=()=>{
        //  alert("Welcome to  Kloudrac ")
    }
  return (
    <>
    
    <Grid container className='header' spacing={2} alignItems='center' justifyContent='center' direction='column'>
      <Grid item>
        <img
          style={{ position: 'absolute',
          width: '73px',
          height: '30.82px',
          left: '20px',
          top: '29.39px'}}
          src='https://i.ibb.co/bWM2D0m/Kloudrac-LOGO.png'
          alt='kloudrac logo'
        />
      </Grid>
      {/* <Grid container sx={{marginTop:-2}}>
<Grid item>
<Grid item>
        <img
          style={{ height: 50 ,width:120}}
          src='https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P3A00000kIYEYUA4'
          alt='kloudrac logo'
        />
      </Grid>
</Grid>
    </Grid> */}
      <Grid item sx={{marginTop:5}}> 
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item >
            <h1>Welcome To</h1>
            {/* <h1>Kloudrac's</h1> */}
          </Grid>
          <Grid item sx={{marginTop:'-60px'}}>
            <h1>Kloudrac's</h1>
          </Grid>
          <Grid item sx={{marginTop:'-30px'}}>
            <h3>Loyalty Program App</h3>
          </Grid>
          <Grid item sx={{marginBottom:'50px'}}> 
          <img 
             style={{ height:'250px',width:'250px' }} 
          src='https://i.ibb.co/vQ8rDjY/Main-Vector.png' alt='Bussiness pic'/>
          </Grid>
          <Grid item sx={{marginBottom:'100px'}}>
          <Link to='rewardpoint' style={{textDecoration:'none',color:'blue'}} >
            <Button
              variant="contained"
              size='large'
              onClick={handleChange}
              sx={{
                width: '280px',
                backgroundColor: 'white',
                color: '#145889',
                fontWeight:'600',
                borderRadius:'10px',
                marginTop:'-70px'
              }}
            >
              NEXT
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default WelcomePage;
