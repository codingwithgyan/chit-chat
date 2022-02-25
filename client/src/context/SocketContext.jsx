import { Children, createContext, useState } from "react"
import { io } from "socket.io-client";

export const SocketContext = createContext();
const socket = io("http://localhost:2345");
export function SocketContextProvider({children})
{
    const [onlineUsers,setOnlineUsers]=useState([]);
    return <SocketContext.Provider value={{socket,onlineUsers,setOnlineUsers}}>{children}</SocketContext.Provider>
}