const RestaurentLogin = () =>{
    return(
        <>
       <h3> Restaurent Login</h3>
       <div>
        <div className="input-wrapper">
        <input type ="text" placeholder="Email" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="text" placeholder="password" className="input-field"/>
       </div>
       <div className="input-wrapper">
       <button className ="button">
        Login
       </button>
       </div>
       </div>
        </>
        
        );
        }
 export  default RestaurentLogin;