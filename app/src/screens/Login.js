import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await Axios.post("http://localhost:5000/api/login", { email: email, password: password })
            if(data) {
                return props.history.push("/");
            }
            console.log("Try again")
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
        <NavbarComponent />
            <div className="container space">
                <form onSubmit={submitHandler}>
                    <h3>login</h3>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group adjust">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="adjust">
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                    </div>

                    <div className="adjust">
                        <p className="forgot-password text-right">
                            New Here? <Link to={"/register"}>Sign up?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;