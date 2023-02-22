import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  //early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Library</li>
        <li>Your videos</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>Creator Studio</li>
        <li>YouTube Music</li>
        <li>Youtube Kids</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Akshay saini</li>
        <li>Seed It Solution</li>
        <li>Tricky Man</li>
        <li>Codeitup</li>
      </ul>

      
    </div>
  )
}

export default Sidebar
