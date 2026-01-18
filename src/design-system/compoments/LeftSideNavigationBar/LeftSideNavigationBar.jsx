import React from 'react'
import {NotificationButton} from "@/design-system/assets/icons/icons.js";
import LinkWithIcon from '../LinkWithIcons/LinkWithIcons';
import './styles.css'
import { HomeIcon, SettingsIcon, DashboardIcon, DiscoverIcon } from '@/design-system/assets/icons/icons.js'

function LeftSideNavigationBar () {
  return (
    <div>
        <div className="leftSideNavigationBar">
            <div className={'iconContainer logo'}>
                <LinkWithIcon linkText={'Winning Year'} />
            </div>  
            <div className="navContainter">
                <div className="top">
                  <div className="menuItem">
                    <LinkWithIcon icon={<HomeIcon/>} linkText={'My Wins'} />
                  </div>
                </div>
                <div className="center">
         

                <div className="menuItem">
                  <LinkWithIcon  icon={<DashboardIcon/>}linkText={'Dashboard'} />

                  </div>
         <div className="menuItem">
                    
                  <LinkWithIcon  icon={<DiscoverIcon/>}linkText={'Discover'} />
                  </div>
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


