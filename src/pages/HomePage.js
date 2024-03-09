import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./Pages.css";

const HomePage = () => {
  const navigate = useNavigate();
  const containerStyle = {
    backgroundImage: "url('https://t4.ftcdn.net/jpg/01/98/50/63/360_F_198506301_zS7IDI4YU7kW0zFVagjTwl8AVI7lZvjP.jpg')",
    backgroundSize: 'cover',
  };

  return (
    <div className='homepage' style={containerStyle}>
      <div className="NavBarDiv">
        <nav onClick={()=>{navigate("/")}}>HomePage</nav>
        <nav onClick={()=>{navigate("/login")}}>Login</nav>
      </div>
    <div id='block1'>
      <Typography variant="h4" align="center">
        Welcome to Our Food Stall!
      </Typography>
      <Typography variant="h5" align="center" >
        We offer a wide variety of delicious dishes. Visit us today!
      </Typography>
      </div>
      <div className='homepagecotainer'>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p >This web-application DIY is designed to work as a waiter. 
          As we all know that now-a-days self-service is majorly adapted by food-stalls, college canteens, ice-cream parlour, etc. 
          for people. The application basically makes it easier for people to order from their tables itself. 
          The customer can also pre-order through the mobile application.
          This web-application consist of two User-roles one is customer and the other is admin(owner or chief cook).
          In customer-side the user can select items user want order and pay for it using the app fast and easy.
          on the other hand the admin view the order made by user.
          </p>
          </div>
          <img src='/undraw_tasting_re_3k5a.svg' alt='not found'></img>
      </div>
    </div>
  );
}

export default HomePage;

