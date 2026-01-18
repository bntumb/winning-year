import React from 'react'
import  './styles.css'
import CardContainer from '../CardContainer/CardContainer'


function EntryDisplay({content, timestamp }) {

  return (
    <CardContainer backgroundColor={'rgb(252, 250, 213)'}>
        <div className='contentContainer'>
          <div className="content">
          
          {content}
          </div>
        </div>
        <div className='timestamp'>{timestamp}</div>
    </CardContainer>

   
  )
}

export default EntryDisplay