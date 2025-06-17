'use client'
import { useState } from "react"
import RestaurentLogin from "../_components/restaurentLogin"
import RestaurentSignUp from "../_components/restaurentSignUp"

const Restaurent = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
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
        </>
    )
}

export default Restaurent