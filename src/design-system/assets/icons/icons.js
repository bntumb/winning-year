import React from "react";

import Notifications from '@mui/icons-material/Notifications'
import Add from '@mui/icons-material/Add'
import Home from '../../../../public/home.png'

const PublicIcon  =({url, altText})=>{
    return (
        <div>
            <img style={{width:'1.3rem', display:'flex'} } src={url} alt={altText} />
        </div>
    )
}


export const NotificationButton= ({notifcationCount})=>{
    return(
        <div>
          <Notifications/>   
        </div>
    )
}
export const AddIcon = ()=>{
    return(
        <Add/>
    )
}


export const HomeIcon = () => {
  return <PublicIcon url="/home.png" altText="Home" />
}


export const SettingsIcon = () => {
  return <PublicIcon url="/settings.svg" altText="Home" />
}

export const DiscoverIcon = () => {
  return <PublicIcon url="/discover.svg" altText="Home" />
}


export const DashboardIcon = () => {
  return <PublicIcon url="/dashboard.svg" altText="Home" />
}

// ----------------------------------------
// Default export
// ----------------------------------------
const Default =()=>''
export default Default