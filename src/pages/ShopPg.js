import { NavLink } from "react-router-dom"
export const ShopPage = ()=>{


    return(<div className="containerShop">
        <div className="aboutDiv">
            <ul>
                <li ><NavLink className="link active" to={"/shop"}>Overview</NavLink></li>
                <li><NavLink className="link" to={""}>Live</NavLink></li>
                <li><NavLink className="link" to={""}>Push</NavLink></li>
                <li><NavLink className="link" to={""}>Move</NavLink></li>
                <li><NavLink className="link" to={""}>Merchandise</NavLink></li>
            </ul>

        </div>

        
        <div className="LiveShop">
            <p>l</p>
        </div>

        
    </div>)
}