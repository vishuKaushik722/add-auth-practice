import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'


const HomeScreen = () => {

    const [userDetails, setUserDetails] = useState({});

    const getCode = async () => {
        const userInfo = await Cookies.get("userInfo");
        setUserDetails(userInfo);
    }


    const cookieRemover = async (e) => {
        e.preventDefault();
        await Cookies.remove("userInfo");
        setUserDetails({});
    }
    
    const showText = () => {
        if(userDetails) {
            return <h4>{`Welcome ${userDetails.email}`}</h4>
        }
        return <Link to={"/register"}><div>Sign up here!</div></Link>
    }

    console.log(userDetails)
    
    useEffect(() => {
        getCode();
    }, [userDetails])

    return (
        <div>
            <NavbarComponent />
            <h1>Home Screen</h1>
            {showText()}
            <button onClick={cookieRemover} type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        </div>
    )
}

export default HomeScreen;