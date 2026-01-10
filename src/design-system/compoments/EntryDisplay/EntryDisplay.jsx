import React from 'react'
import  './styles.css'

function EntryDisplay({content, timestamp}) {
    const contentData = content==''?content:'Nothing to display here'
    const timestampData = timestamp==''?timestamp:'Nothing to display here'
  return (
    <div className='entryDisplay'>
        
        <div className='content'>{contentData}</div>
        <div className='timestamp'>{timestampData}</div>
        
    </div>
  )
}

export default EntryDisplay