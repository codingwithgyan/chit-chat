import { Link } from "react-router-dom";

export function Navbar()
{
    return <div className="navbar">
                <Link to="/" style={{ textDecoration: "none",color: "white"}}><div className="navbar_inner">Home</div></Link>
                <Link to="/create" style={{ textDecoration: "none",color: "white"}}><div className="navbar_inner">Create</div></Link>   
                <Link to="/join" style={{ textDecoration: "none",color: "white"}}><div className="navbar_inner">Join</div></Link>       
    </div>
}