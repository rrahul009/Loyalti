import { Button, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




import React, { useState } from 'react'

const MemberForm = () => {
    const [city, setCity] = React.useState('');
    const [gender, setGender] = React.useState('male');
    const[date,setDate]= useState('null')





    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
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
                    <img src='MainVector.png' alt='Loading' style={{ height: '150px' }} />
                </Grid>
            </Grid>

            <Paper elevation={2} style={{borderRadius:'20px'}}> 
                <Grid container justifyContent='center' alignItems='center' direction='column'>
                    <Grid item>
                        <p style={{ fontSize: '18px' }}>Member Form</p>
                    </Grid>

                    <Grid item>
                        <InputLabel>Address Line 1</InputLabel>
                        <TextField
                            placeholder="Streat Name"
                            sx={{
                                width: '300px',
                                height: '60px',
                                '& .MuiInputBase-input': {
                                    paddingTop: '20px',
                                    paddingBottom: '15px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <InputLabel>Address Line 2</InputLabel>
                        <TextField
                            placeholder="Streat Name"
                            sx={{
                                width: '300px',
                                height: '60px',
                                '& .MuiInputBase-input': {
                                    paddingTop: '20px',
                                    paddingBottom: '15px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <InputLabel>City</InputLabel>
                        <TextField
                            select
                            value={city}
                            onChange={handleCityChange}
                            sx={{
                                width: '300px',
                                height: '60px',
                                '& .MuiSelect-select': {
                                    paddingTop: '20px',
                                    paddingBottom: '15px',
                                },
                            }}
                            InputProps={{
                                placeholder: 'Select City',
                            }}
                        >
                            <MenuItem value="city1">Delhi</MenuItem>
                            <MenuItem value="city2">Noida</MenuItem>
                            <MenuItem value="city3">Greater Noida</MenuItem>
                            <MenuItem value="city4">Gurugram</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel>Country</InputLabel>
                        <TextField
                            select
                            value={city}
                            onChange={handleCityChange}
                            sx={{
                                width: '300px',
                                height: '60px',
                                '& .MuiSelect-select': {
                                    paddingTop: '20px',
                                    paddingBottom: '15px',
                                },
                            }}
                            InputProps={{
                                placeholder: 'Select City',
                            }}
                        >
                            <MenuItem value="city1">India</MenuItem>

                        </TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel>Pin code</InputLabel>

                        <TextField
                            sx={{
                                width: '300px',
                                height: '60px',
                                '& .MuiSelect-select': {
                                    paddingTop: '20px',
                                    paddingBottom: '15px',
                                },
                            }}

                        />

                    </Grid>
                    <Grid item>
                        <p>Personal details</p>
                        <p>gender</p>
                        <Grid container >
                            <Grid item >
                                <RadioGroup row value={gender} defaultValue="female" onChange={handleGenderChange}>
                                    <FormControlLabel value="male" control={<Radio />} label={<Typography>Male</Typography>} />
                                    <FormControlLabel value="female" control={<Radio />} label={<Typography>Female</Typography>} />
                                    <FormControlLabel value="other" control={<Radio />} label={<Typography>Other</Typography>} />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker  sx={{width:'300px'}}/>
                        </LocalizationProvider>

                    </Grid>
                    <Grid item sx={{marginTop:'10px'}}>
                        <InputLabel>Aadhar Card</InputLabel>
                        <TextField
                        placeholder='enter your Aadhar Number'
                        sx={{width:'300px'}}
                        />

                    </Grid>
                    <Grid item sx={{marginTop:'10px'}}>
                        <Button variant='contained' sx={{width:'300px', size:'large',height:'50px',borderRadius:'20px'}}>
                            Unlock Opportunities
                        </Button>
                        <p style={{marginLeft:'20px'}}>Already Have a account?<Button>Login</Button></p>

                    </Grid>
                    


                </Grid>

            </Paper>
        </>
    )
}

export default MemberForm