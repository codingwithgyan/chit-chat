import { Navbar } from "./Navbar";

export function CreateRoom()
{
    return <div className="bgImage">
                <Navbar/>
                <div className="login_box">
                  <div className="login_logo"></div>
                    <div><label>Enter Room Name</label></div>
                        <div><input type="text" className="login_input" placeholder="" /></div>
                        <div><button className="login_create">Create</button></div>
                </div>
    </div>
}