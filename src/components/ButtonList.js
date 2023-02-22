import React from 'react'
import Button from './Button'



const ButtonList = () => {
  const buttonList =["Music","Bollywood Music","React Routers","Python","Game shows","Data Structures","Conversation","Recently uploaded","Watched","New to you"]
  return (
    <div className='flex'>
      <button className="px-5 py-2 m-2 bg-black text-white rounded-md">All</button>
      {buttonList.map(item=>{
        return <Button key={item.id} name={item}/>
       })} 
    </div>
  )
}

export default ButtonList
