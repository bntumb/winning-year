import React from 'react'
import './styles.css'
import '../../validations/ReturnEmptyOrValue'
import returnEmptyOrValue from "@/design-system/validations/ReturnEmptyOrValue"
function LabelledToggleButton({label, toggleValue}) {

  return (
    <div className='container'>
        <div className='label'>{returnEmptyOrValue({label})}</div>
        <div className='switchContainer'>{returnEmptyOrValue({toggleValue})}</div>
    </div>
  )
}

export default LabelledToggleButton