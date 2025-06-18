import Link from  'next/link';  

const RestaurentHeader = () =>{
    return(
        <div>
            <div className="header-wrapper">
                <div className='Logo'>
                <img style={{width:100}} src ="https://www.shutterstock.com/image-vector/express-delivery-label-courier-boy-riding-2050009979"></img>
            </div>
            <ul>
                <li>
                    <Link href = "/">Home</Link>
                </li>
                <li>
                    <Link href = "/">Login/Signup</Link>
                </li>
                <li>
                    <Link href = "/">Profile</Link>
                </li>
            </ul>
        </div>
        </div>
    )
}
export default RestaurentHeader;