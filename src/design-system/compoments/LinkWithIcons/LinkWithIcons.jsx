import React from 'react'
import returnEmptyOrValue from '@/design-system/validations/ReturnEmptyOrValue'

import "./styles.css"

const LinkWithIcon =({icon, url, linkText})=>{
    return(
        <div className='linkContainer'>
             <div className='icon'>{icon}</div>
             <a href={returnEmptyOrValue(url)}>{returnEmptyOrValue(linkText)}</a>
        </div>
        )
}

 export default LinkWithIcon
