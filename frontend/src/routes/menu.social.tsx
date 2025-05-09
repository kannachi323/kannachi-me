import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { AiOutlineClose } from 'react-icons/ai'
import { IoAddCircleOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';


import { ProfileBanner } from '@/components/Banners/ProfileBanner'
import { SocialChannels } from '@/components/Footers/MainFooter';

export const Route = createFileRoute('/menu/social')({
  component: RouteComponent,
})

function RouteComponent() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currMessage, setCurrMessage] = useState('');
  

  useEffect(() => {
    const systemMessages = [
      {text: 'Attempting to join channel', delay: 500},
      {text: 'Joined #Matthew Chen', delay: 3000},
      {text: 'For a list of commands, type /h or /help', delay: 3500},
    ];
    
    const timeouts = systemMessages.map((msg) =>
      setTimeout(() => {
        setMessages((prev) => [...prev, msg.text]);
      }, msg.delay)
    );
  
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const messageBox = document.querySelector('[aria-label="message-box"]')
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight;
    }
  }, [messages])

  function updateMessages(e : React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      currMessage.trim()
      const newMessages = [...messages]
      newMessages.push(currMessage);
      setMessages(newMessages);
      setCurrMessage('');
    }
  }
  
  return (
    <div className="absolute inset-0 z-[99999] bg-black/85 w-screen h-screen">
      <div className="flex flex-row h-[12vh] w-full">
        <ProfileBanner />
        <Link to={'/menu'}>
          <AiOutlineClose className="text-5xl absolute right-0 mr-2"/>
        </Link>
      </div>
      

     

      <div className="flex flex-col w-full h-[88vh] p-2">
        <div aria-label="social-box" className="h-[55%] w-full flex flex-row justify-center items-center space-x-5 relative">
          <h1 className="absolute top-0 text-5xl">let's chat.</h1>
          <SocialChannels />
          <SocialChannels />
          <div className="absolute bottom-0 text-2xl flex flex-col items-center justify-center">
            <h1>Select a social platform to open a new tab in the chat below.</h1>
            <h1>or</h1>
            <h1>Start a direct message by typing <b className="text-green-300">/dm</b></h1>
          </div>

        
        </div>
        <div aria-label="tabs" className="flex flex-row items-end h-[5%] w-full">
          <label className="text-md rounded-tr-lg rounded-tl-lg border-2 px-1">Matthew Chen</label>
          <button className="text-2xl rounded-tr-lg rounded-tl-lg border-2 border-l-0 bg-yellow-500">
            <IoAddCircleOutline className="outline-black" />
          </button>
        </div>
       
        <div aria-label="message-box" className="h-[35%] w-full overflow-y-scroll">
          <MessagesList messages={messages}/>

        </div>
        <div aria-label="input-box" className="flex flex-row h-[5%] w-full items-center space-x-1">
          <b>{`>`}</b>
          <input placeholder="Type a message here..." autoFocus
            className="outline-0 w-full" autoComplete="off" type="text" onKeyDown={(e) => updateMessages(e)}
            onChange={(e) => setCurrMessage(e.target.value)} value={currMessage}
          />
        </div>
        

      </div>
      
    </div>
  )
}

function MessagesList({messages} : {messages: string[]}) {
  const color = ['text-red-300', 'text-green-300', 'text-blue-300']
  return (
    <ul className="flex flex-col justify-end min-h-full">
      {messages.map((message, i) => (
        <li key={i} className={`text-md ${i < 2 ? color[i] : ''}`}>{message}</li>
      ))}
    </ul>
  )
}
