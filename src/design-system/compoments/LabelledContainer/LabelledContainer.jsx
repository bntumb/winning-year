import React from 'react'
import EntryDisplay from '../EntryDisplay/EntryDisplay'
import './styles.css'
function LabelledContainer({label, children}) {
  return (
    <div className='label-container'>
        <div className='label'><h1>{label}</h1></div>
        <div className='content'>
          <EntryDisplay content={'Hello world!'} timestamp={'timestamp'} /> 
        </div>
    </div>
  )
}

export default LabelledContainer