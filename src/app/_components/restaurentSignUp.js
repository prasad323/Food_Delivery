const RestaurentSignUp = () =>{

         return(
        <>
       <h3> SignUp</h3>
       <div>
        <div className="input-wrapper">
        <input type ="text" placeholder="Email" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="text" placeholder="password" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="password" placeholder="Confirm password" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="password" placeholder="Enter restaurent name" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="password" placeholder="Enter city" className="input-field"/>
       </div>
       <div className="input-wrapper">
        <input type ="password" placeholder="Enter full address " className="input-field"/>
       </div>
        <div className="input-wrapper">
        <input type ="password" placeholder="Enter contact number " className="input-field"/>
       </div>
       <div className="input-wrapper">
       <button className ="button">
        SignUp
       </button>
       </div>
       </div>
       
        </>
        
        );

}

export  default RestaurentSignUp