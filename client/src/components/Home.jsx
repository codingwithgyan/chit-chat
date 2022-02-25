import { Navbar } from './Navbar';
import { RoomBox } from './RoomBox';
import { MemberBox } from './MemberBox';
import { MessageBox } from './MessageBox';
import {io} from "socket.io-client";
import { useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
export function Home()
{
    const [message,setMessage] = useState("");
    const [messageList,setMessageList] = useState([]);
    const [searchParam,setSearchParam]=useSearchParams();
    const name = searchParam.get("name");
    const room_id = searchParam.get("id");
    const {socket}=useContext(SocketContext);
    const [userList,setUserList] = useState([]);
    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            console.log("receive message",data);
            setMessageList((prev)=>{
                    return [...prev,data];
            });
        });
    },[socket]);

    const sendMessage=()=>{
            if(message.length!==0)
            {
                if(socket!=undefined && socket!=null && name!=undefined && name.length!=0 && room_id!=undefined && room_id.length!=0)
                {
                    let obj={
                        name,
                        room_id,
                        message,
                    }
                    setMessageList((prev)=>{
                        return [...prev,obj];
                });
                    socket.emit("send_message",obj);
                    
                }
            }  
    }

    return <div>
                <Navbar/>
                <RoomBox/>
                
                <MemberBox/>
                <div className='message_input_box'>
                    <input onKeyPress={(e)=>{ 
                        if(e.key=="Enter")
                        {
                            sendMessage();
                        }
                    }} onChange={(e)=>{setMessage(e.target.value)}} type="text" className='message_input' placeholder='write your message' />
                    <div className='send_icon' onClick={sendMessage}></div>
                </div>
                {
                    messageList.length!=0? <MessageBox messageList={messageList} name={name}/>:<MessageBox messageList={[]} name={name} />
                }
    </div>
}