import React from 'react';
import LinkWithIcon from '../LinkWithIcons/LinkWithIcons';
import './styles.css';
import {
  HomeIcon,
  SettingsIcon,
  DashboardIcon,
  DiscoverIcon,
} from '@/design-system/assets/icons/icons.js';

function LeftSideNavigationBar() {
  return (
    <aside className="leftSideNavigationBar">
      {/* Logo */}
      <div className="logo">
        <LinkWithIcon linkText="Winning Year" />
      </div>

      {/* Navigation */}
      <nav className="navContainer">
        <div className="center">
          <div className="menuItem">
            <LinkWithIcon icon={<HomeIcon />} linkText="My Wins" />
          </div>

          <div className="menuItem">
            <LinkWithIcon icon={<DashboardIcon />} linkText="Dashboard" />
          </div>

          <div className="menuItem">
            <LinkWithIcon icon={<DiscoverIcon />} linkText="Discover" />
          </div>
        </div>

        <div className="bottom">
          <LinkWithIcon icon={<SettingsIcon />} linkText="Settings" />
        </div>
      </nav>
    </aside>
  );
}

export default LeftSideNavigationBar;
