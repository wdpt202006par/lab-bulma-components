import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return (
    <div className='control'>
      <button className={`button ${props.className}`}>{props.children}</button>
    </div>
  );
};

export default CoolButton;