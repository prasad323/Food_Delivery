'use client'
import { useState } from "react"
import RestaurentLogin from "../_components/RestaurentLogin"
import RestaurentSignUp from "../_components/RestaurentSignUp"
import RestaurentHeader from "../_components/RestaurentHeader"
import Footer from "../_components/Footer"

import './style.css' 

const Restaurent = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
            <RestaurentHeader/>
            <h1>Restaurent Login/SignUp</h1>
            {
                login ? <RestaurentLogin /> : <RestaurentSignUp />
            }
            <div>
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have acount Signup" : "Already have an account Login"}
                </button>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Restaurent