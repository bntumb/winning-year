import React from 'react'
import AddButton from '../AddButton/AddButton'
import  './styles.css'
import { NotificationButton } from '@/design-system/assets/icons/icons'
import { Primary } from '@/stories/AddButton.stories'
function HomePageHeaderSection() {
  return (
        <div className={'container'}> 
            <div className='greeting'>
                <p>Welcome back</p>
                <h1> Sensei</h1>
            </div>
            <div className='row'>
                 <AddButton label={'Add a Win'} primary={true}/>
                <div className={'iconContainer'}>
                    <NotificationButton/>
                </div>  
     
            </div>


      </div>
  )
}

export default HomePageHeaderSection