import React from 'react'
import EntryDisplay from '../CardContainer/CardContainer'
import './styles.css'
function LabelledContainer({label, children}) {
  return (
    <div className='label-container'>
        <div className='label'><h1>{label}</h1></div>
        <div className='content'>
    <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 
      <EntryDisplay/> 


        </div>

    </div>
  )
}

export default LabelledContainer