import React,{useEffect, useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const[searchQuery,setSearchQuery] = useState("");
  const[suggestions,setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

/**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */
  useEffect(()=>{
   //API call
   
   //make an api call after every key press
   //but if the difference b/w 2 Api calls is <200ms
   //decline the Api call
   const timer = setTimeout(() => getSearchSuggestion(),200);
  
   return () =>{
    clearTimeout(timer);
   }
  
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API CALL -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(data);
    // console.log(json);
    // console.log(json[1]);
    // console.log(json[2]);

    // console.log(json[3]);
    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
         <div className='col-span-10  px-10'>
          <div>
            <input 
                className='w-1/2 border p-2 border-gray-400 rounded-l-full font-normal text-gray-500 px-5'
                type="text" 
                value ={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                />
              <button 
                className='border p-2 border-gray-400 rounded-r-3xl px-5 bg-gray-100'>
                  🔍
              </button>
          </div>
          {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
