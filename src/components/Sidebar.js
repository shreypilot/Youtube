import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarRow from './SidebarRow';
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  //early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 cursor-pointer w-48">
      <Link to='/'>
      <div className='bg-gray-200 rounded-lg font-bold w-40'>
       <SidebarRow Icon={HomeIcon} title="Home"  />
      </div>
      </Link>
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />

      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpOffAltIcon} title="Like Videos" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="Show More" />
    
 
    </div>
  )
}

export default Sidebar
