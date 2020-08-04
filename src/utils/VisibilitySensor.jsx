import React, { useState } from 'react';
import VisSensor from 'react-visibility-sensor';

const VisibilitySensor = ({ children, minTopValue }) => {
  const [isShown, setIsShown] = useState(false);

  const handleChange = isVisible => {
    if (isVisible) {
      setIsShown(true);
    }
  };

  return (
    <VisSensor
      onChange={handleChange}
      minTopValue={minTopValue}
      partialVisibility
    >
      {children(isShown)}
    </VisSensor>
  );
};

export default VisibilitySensor;
