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
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
import "./Navbar.css"


const drawerWidth = 240;
const navItems = ['Menu', 'payments', 'Logout'];

function UserNavbar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'center',
      backgroundImage: "url('https://t4.ftcdn.net/jpg/01/98/50/63/360_F_198506301_zS7IDI4YU7kW0zFVagjTwl8AVI7lZvjP.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height : "100vh",
      color : "#F8EBE3"
    }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
           <ListItemButton
  sx={{ textAlign: 'center' }}
>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const handleitemclick = (item)=>{
    console.log(item)
  if(item=='Menu'){
    navigate('/usermenu')
  }
  if(item=='payments'){
    navigate('/Userorder')

  }
  if(item=='Logout'){
    if (window!==undefined&& window.confirm("Are you sure you want to Logout .")) {
      console.log('User confirmed logout');
      localStorage.clear();
      navigate('/');
  }}}

  return (
  <>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
       sx={{ backgroundColor: { xs: 'transparent', sm: 'transparent', md: 'transparent', lg: 'transparent', xl: 'transparent' } }}
       >
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
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={()=>handleitemclick(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  </>
  );
}

UserNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default UserNavbar;