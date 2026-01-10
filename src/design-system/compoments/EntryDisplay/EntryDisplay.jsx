import React from 'react'
import  './styles.css'
import returnEmptyOrValue from '@/design-system/validations/ReturnEmptyOrValue'

function EntryDisplay({content, timestamp}) {

  return (
    <div className='entryDisplay'>
        
        <div className='content'>{returnEmptyOrValue({content})}</div>
        <div className='timestamp'>{returnEmptyOrValue({timestamp})}</div>
        
    </div>
  )
}

export default EntryDisplay