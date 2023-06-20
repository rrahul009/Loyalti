import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, CardMedia, Grid, Paper, Slider, TextField } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Stepper, Step, StepLabel } from '@mui/material'

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/login' },
  { label: 'Contact', path: '/signup' }
];

function UserProfile(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Paper elevation={5} style={{ height: '100%' }}>
      <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.label} sx={{ color: '#fff' }}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

      </Box>
      <Grid container sx={{ marginTop: '80px', justifyContent: 'center' }}>
        <Card sx={{ maxWidthwidth: '400px', height: '320px', borderRadius: '30px', marginLeft: '10px', marginRight: '10px', 
          backgroundImage: "url('profile_image.jpg')", backgroundSize: 'cover',
          backgroundPosition: 'center',}}>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <CardContent sx={{ marginLeft: '-25px' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Hello, Prajwal!
                </Typography>
                <Typography sx={{ marginTop: '-10px' }} variant="body2" color="text.secondary">
                  Your content goes here
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sx={{ height: '50px', width: '50px', marginTop: '20px' }}>
              <CardMedia
                sx={{ height: 50 }}
                image="Facebook.png"
                title="green iguana"
              />
            </Grid>
          </Grid>
          <Grid width='310px'>

            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', gap: '6px' }}>
              <h3>1296</h3>
              <img src="coin.png" alt="coin" style={{ height: '40px', marginLeft: '5px' }} />
            </Typography>

            <Slider
              sx={{ marginLeft: '10px', width: '280px', marginTop: '-29px', '& .MuiSlider-thumb': { display: 'none', }, }}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '-35px', padding: '0 16px' }}>
              <p style={{ fontSize: '500' }}>1296/3000</p>
              <p>platinum</p>
            </Typography>

          </Grid>

          <Grid item sx={{ marginTop: '50px' }}>
            <CardActions>
              <Grid container direction='row' justifyContent='space-around'>
                <Grid item><Button size="small" variant='contained'  sx={{ width: '120px', textTransform: 'none', bgcolor:'white' ,color:'black'}}>Redeem</Button></Grid>
                <Grid item> <Button size="small" variant='contained' sx={{ width: '120px', textTransform: 'none', bgcolor:'white' ,color:'black' }}>Details</Button></Grid>
              </Grid>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item sx={{ marginLeft: '20px', marginTop: '20px' }}>
          <Typography variant="h5">Loyalty</Typography>
          <Stepper orientation="vertical">
            <Step sx={{ marginBottom: '-25px' }}>
              <StepLabel>
                <Typography variant="body2">
                  <strong>Invite Your Friends</strong>
                </Typography>
                <Typography variant="body2">Just share your link</Typography>
              </StepLabel>
            </Step>
            <Step sx={{ marginBottom: '-20px' }}>
              <StepLabel>
                <Typography >  <strong> They Register at Loyalty App</strong></Typography>
                <Typography variant="body2">Additional description goes here</Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                You Get 50 Points
                <Typography variant="body2">Additional description goes here</Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item><Typography>Referral link</Typography></Grid>


        <Grid item>
          <TextField sx={{
            width: '230px',
            marginLeft: '5px',
            '& .MuiInputBase-input': {
              height: '12px', // Set a custom height here


            }
          }}
            label="Referral Code"
            variant="outlined"
          />
        </Grid>
        <Grid>
          <Button sx={{
            marginLeft: '10px', width: '60px', height: '35px', marginTop: '4px', backgroundColor
              : '#145889'
          }} variant="contained" size="small">
            <IconButton>
              <ShareIcon sx={{ color: 'white', }} />
            </IconButton>

          </Button>
        </Grid>




      </Grid>
      <Grid container justifyContent='center' alignItems='center' direction='column' marginTop='20px' >
        <Grid item><Typography>Our Partners</Typography></Grid>
        <Grid item>
          <Card sx={{ width: 300 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Store1
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                  Noida sec 62, Delhi-110088
                </Typography>
              </CardContent>

              <CardMedia
                sx={{ height: 120, marginTop: -2 }}
                image="store1.jpg"
                title="green iguana"
              />
            </CardActionArea>
          </Card>

          <Card item sx={{ marginTop: '10px'  }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Store2
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                    GTB Nagar, Delhi-110085
                  </Typography>
                </CardContent>


                <CardMedia
                  sx={{ height: 120, marginTop: -2 }}
                  image="store2.webp"
                  title="green iguana"
                  alt="store picture"
                />

              </CardActionArea>
            </Card>

          </Card>

        </Grid>

      </Grid>
    </Paper>
  );
}

UserProfile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserProfile;
