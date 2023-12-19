import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import LandingPage from '../components/LandingPage';

const Home = () => {
    return (
        <div>
            <div>
                <LandingPage />
            </div>
            <Link to={"/admission"}>
                Register
            </Link>
            <Link to={"/login"}>
                Login
            </Link>
        </div>
    )
}

export default Home