import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function AboutPage() {

    return (


        <div>
            <header className="App-header">
                <h1>About Us</h1>
                <p>Welcome to our online selling platform!</p>
                <p>We aim to provide a seamless shopping experience for our customers.</p>
                <p>Feel free to explore our wide range of products and make a purchase.</p>
                <Button component={Link} to="/home" variant="contained" color="primary">
                    Get Started
                </Button>
            </header>
        </div>
    );


};

export default AboutPage;