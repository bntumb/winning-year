import React from "react";

import Notifications from '@mui/icons-material/Notifications'
import Add from '@mui/icons-material/Add'

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
// ----------------------------------------
// Default export
// ----------------------------------------
const emptyIcon =()=>{
    return <Add/>
}

export default emptyIcon