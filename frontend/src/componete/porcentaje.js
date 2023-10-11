import React from "react";

const Panel = ({ percentage }) => {
  const getCircleColor = () => {
    if (percentage >= 80) {
      return 'green';
    } else if (percentage >= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className="app">
      {/* Resto del contenido del componente */}
      <div className="circle-loader">
        <svg width="60" height="60">
          <circle
            className="circle"
            cx="30"
            cy="30"
            r="27"
            stroke={getCircleColor()}
            strokeWidth="7"
            fill="none"
            strokeDasharray="251"
            strokeDashoffset={(251 * (100 - percentage)) / 100}
          />
          <text x="30" y="30" textAnchor="middle" dy="0.3em" className="percentage">
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Panel;
