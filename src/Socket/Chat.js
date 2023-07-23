import React, { useEffect, useState } from 'react'



function Chat({socket,username,room}) {
  const [message,setMessage]=useState("")
    console.log(socket,username,room)
    const sendChat=async()=>{
      if(message !==""){
        const data={
          room:room,
          name:username,
          message:message,
          time:new Date().getTime()
        }
        await socket.emit("sendmessage",data);
        setMessage("");

      }
    }

    useEffect(()=>{
      console.log("hn")

      socket.on("receive_message",(data)=>{
console.log(data);
      });
    },[socket]);
    console.log(socket);
    
  return (
    <>
    <div className='header'></div>
    <div className='body'></div>
    <div className='footer'>
      <input type="text" value={message} placeholder="Enter msg" onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={sendChat}>&#9658;</button>
    </div>
    </>
  )
}

export default Chat;