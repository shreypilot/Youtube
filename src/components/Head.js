import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Head = () => {

  const[searchQuery,setSearchQuery] = useState("");
  

  useEffect(()=>{
   //API call
   console.log(searchQuery);
   getSearchSuggestion();
   //make an api call after every key press
   //but if the difference b/w 2 Api calls is <200ms
   //decline the Api call
   setTimeout(() => getSearchSuggestion(),200);
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
            <img
              onClick={() => toggleMenuHandler()}
              className='h-8 cursor-pointer' 
              alt="menu" 
              src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"/>
            
            <a href="/">
              <img
                    className='h-8 mx-2' 
                    src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" 
                    alt="youtube-logo"
                    />
            </a>   
         </div>
         <div className='col-span-10 text-center px-10'>
            <input 
              className='w-1/2 border p-2 border-gray-400 rounded-l-3xl font-normal text-gray-500 px-4'
              type="text" 
              value ={searchQuery}
              onChange={(e)=> setSearchQuery(e.target.value)}
              />
            <button 
              className='border p-2 border-gray-400 rounded-r-3xl px-5 bg-gray-100'>
                🔍
            </button>
         </div>
         <div className='col-span-1'>
            <img 
              className='h-8'
              src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png" 
              alt="user" />
         </div>
    </div>
  )
}

export default Head
