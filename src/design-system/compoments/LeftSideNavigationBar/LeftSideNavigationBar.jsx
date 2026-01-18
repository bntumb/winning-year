import React from 'react'
import {NotificationButton} from "@/design-system/assets/icons/icons.js";
import LinkWithIcon from '../LinkWithIcons/LinkWithIcons';
import './styles.css'
import { HomeIcon, SettingsIcon } from '@/design-system/assets/icons/icons.js'

function LeftSideNavigationBar () {
  return (
    <div>
        <div className="leftSideNavigationBar">
            <div className={'iconContainer logo'}>
                <LinkWithIcon linkText={'Winning Year'} />
            </div>  
            <div className="navContainter">
                <div className="top">
                    <LinkWithIcon icon={<HomeIcon/>} linkText={'My Wins'} />
                </div>
                <div className="center">
                  <LinkWithIcon linkText={'Meetings'} />
                </div>
                <div className="bottom">
                    <LinkWithIcon icon={<SettingsIcon/>} linkText={'Settings'} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default LeftSideNavigationBar 


