import React from 'react'
import {NotificationButton} from "@/design-system/assets/icons/icons.js";
import LinkWithIcon from '../LinkWithIcons/LinkWithIcons';
import './styles.css'

function TopNavigationBar() {
  return (
    <div>
        <div className="topNavigationBar">
            <div className={'iconContainer logo'}>
                <LinkWithIcon linkText={'Winning Year'} />
            </div>  

        </div>
    </div>
  )
}

export default TopNavigationBar