import { Navbar } from "./Navbar";

export function JoinRoom()
{
    return <div className="bgImage">
    <Navbar/>
    <div className="login_box">
      <div className="login_logo"></div>
        <div><label>Enter Room ID</label></div>
            <div><input type="text" className="login_input" placeholder="" /></div>
            <div><button className="login_create">Join</button></div>
    </div>
</div>
}