import React from "react";
import io from "socket.io-client"
import { useState,useEffect } from "react";
import Chat from "./Chat";


 const socket=io.connect("http://localhost:8000");

function WSocket(){
    const [username,setUserName]=useState("");
 const [room,setRoom]=useState("");
 const [chat,setChat]=useState(true);



 const joinRoom=()=>{
    if(username!=="" && room !==""){
        console.log(room,username)
        socket.emit("joinroom",room);
        setChat(false);
    }
 }

    return(
        <>
        {chat?
            <>
            <input type="text" placeholder="user name" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="Enter Room Id" onChange={(e) => setRoom(e.target.value)} />
            <button onClick={joinRoom}>Send</button><br /><br />
            </>
        :
            <Chat socket={socket} username={username} room={room} />
        }
        </>
    )
}

export default WSocket;