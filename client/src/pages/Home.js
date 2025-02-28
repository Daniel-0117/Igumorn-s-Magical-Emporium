import React from 'react';
import homePage from '../components/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {
    return (
        <div className="homePage">
        <h1>Welcome to the Home Page</h1>
        <p>
            This is the home page of our app. Here you can find information about
            our app and how to use it.
        </p>
        </div>
    );
    };
export default Home;