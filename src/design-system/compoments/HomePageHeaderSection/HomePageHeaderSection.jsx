import React from 'react';
import AddButton from '../AddButton/AddButton';
import './styles.css';
import { NotificationButton } from '@/design-system/assets/icons/icons';
import CardContainer from '../CardContainer/CardContainer';

function HomePageHeaderSection({
  greetingText = 'Welcome back',
  userName = 'Username',
  addButtonLabel = 'Add a Win',
  addButtonPrimary = true,
  onAddClick,
  showNotification = true,
  notificationCount = 0,
  onNotificationClick,
}) {
  return (
      <CardContainer >

   <div className="container">
      <div className="greeting">
        <p>{greetingText}</p>
        <h1>{userName}</h1>
      </div>
      <div className="row">
        {showNotification && (
          <div
            className="iconContainer"
            onClick={onNotificationClick}
            role="button"
            tabIndex={0}
          >
            <NotificationButton />

            {!!notificationCount && (
              <span className="notificationBadge">{notificationCount}</span>
            )}
          </div>
        )}
      </div>
    </div>
    </CardContainer>

  );
}

export default HomePageHeaderSection;
