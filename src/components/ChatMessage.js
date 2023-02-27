import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img 
            className='h-8'
            src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png" 
            alt="user" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
    </div>
  )
}

export default ChatMessage