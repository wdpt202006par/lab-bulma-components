import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return(<div className="buttons">
    <button className="button is-success">{props.children}</button>
    <button className="button is-danger is-rounded">{props.children}</button>
  </div>)
}

export default CoolButton;
