import React from 'react';

function Activity({ activity }) {
  return (
    <div className="info">
      <div className={`icon ${activity.icon}`}>
        <i className="nc-icon nc-album-2" />
      </div>
      <div className="description">
        <h4 className="info-title">{activity.name}</h4>
        <p className="description">
          {activity.description}
        </p>
      </div>
    </div>
  );
}

export default Activity;
