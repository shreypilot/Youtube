import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import ChatMessage from './ChatMessage';
import { generateRandomName,makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");


  const ChatMessages = useSelector((store)=>store.chat.messages);

  useEffect(() => {
    const i = setInterval(()=>{
       //
       //console.log("API POLLING");
       dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomMessage(20) + "🚀",
       }))
    },2000);

    return () => clearInterval(i);
  },[])
  return (
    
    <>
     
     <div className='w-full h-[600px] ml-2 p-2 border border-black  overflow-y-scroll flex flex-col-reverse bg-slate-100 rounded-lg'>
      {ChatMessages.map((c,i)=>(
        <ChatMessage key={i} name={c.name} message={c.message}/>

      ))}
    </div>
    <form 
        className='w-full p-2 ml-2 border border-black flex'
        onSubmit={(e) =>{
          e.preventDefault();

          dispatch(addMessage({
            name : "Akshay saini",
            message: liveMessage,
          }))
          setLiveMessage("");
        }}>

      <input 
        className='w-full border border-blue-400' 
        type="text"
        value={liveMessage}
        onChange={(e) => {
          setLiveMessage(e.target.value);
        }} />
      <button className='px-2 mx-2 bg-green-400 '>Submit</button>
    </form>

    </>
    
    
    
      
    )
}

export default LiveChat;