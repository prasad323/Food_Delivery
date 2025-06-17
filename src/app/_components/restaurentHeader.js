import Link from  'next/link';  

const RestaurentHeader = () =>{
    return(
        <div>
            <div className="logo">
                <img style={{width:100}} src ="https://www.shutterstock.com/image-vector/express-delivery-label-courier-boy-riding-2050009979"></img>
            </div>
            <ul>
                <li>
                    <Link href = "/">Home</Link>
                </li>
            </ul>
        </div>
    )
}