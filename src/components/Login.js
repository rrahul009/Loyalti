import { Button, Grid, InputLabel, Paper, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
            <Paper elevation={3} sx={{ height: '100%', padding: '10px' }} xs={12} sm={12} lg={6}>

                <Grid container xs={12} sm={12} justifyContent='center' alignItems='center' direction='column'>
                    <Grid item>
                        <p style={{ marginLeft: '-150px', fontSize: 'large' }}>Login</p>
                    </Grid>
                    <Grid item sx={{ marginTop: '-30px' }}>
                        <p>Login With...</p>
                        <Grid container>
                            <Grid item>
                                <img src="Google.png" alt="Google Logo" style={{ height: '25px', marginRight: '20px' }} />
                                <img src="Facebook.png" alt="Facebook Logo" style={{ height: '25px', marginRight: '20px' }} />
                                <img src="Twitter.png" alt="Twitter Logo" style={{ height: '25px', marginRight: '10px' }} />
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item>
                        <InputLabel htmlFor="outlined-required">Email Address</InputLabel>
                        <TextField
                            required
                            // height=''
                            sx={{ width: '300px' }}
                        />
                        <Grid item sx={{ marginTop: '20px' }}>
                            <InputLabel htmlFor='outlined-required'>Password</InputLabel>
                            <TextField
                                required
                                sx={{ width: '300px' }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant='contained' sx={{ width: '100%', marginTop: '30px' }}>
                                Log In
                            </Button>
                            <p style={{ marginTop: '-2px', marginLeft: '20px' }}>Do you have a account? <Link to='/signup'><Button>Signup</Button></Link></p>


                        </Grid>


                    </Grid>
                </Grid>


            </Paper>
        </>
    )
}

export default Login