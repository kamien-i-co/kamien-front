import React from 'react';

function Activity({ activity }) {
  return (
    <div className="info">
      <div className={`icon info`}>
        <i className={`nc-icon ${activity.icon}`} />
      </div>
      <div className="description">
        <h4 className="info-title">{activity.name}</h4>
        <p className="description mt-2">
          {activity.description}
        </p>
      </div>
    </div>
  );
}

export default Activity;
