import React from 'react'

import { AddIcon } from '@/design-system/assets/icons/icons.js'

import "./styles.css"



const AddButton =({label, primary, action})=>{

    const mode = primary?'button--primary':'button--secondary';
    return(
        <div onClick={action} className={`addButton button ${mode}`}>
             <AddIcon/> 
             <span>{label}</span>
        </div>
        )
}

 export default AddButton
