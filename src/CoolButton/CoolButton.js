import React from 'react';
import './CoolButton.css';

const CoolButton = (props) => {
  console.log('props=', props)

  let classes = `button`

  if (props.className) {
    classes += ' '+props.className
  }

  if (props.isDanger === true) {
    // on rajoute la classe 'is-danger'
    classes +=' is-danger'
  }
  if (props.isInfo === true) {
    // on rajoute la classe 'is-danger'
    classes +=' is-info'
  }
  if (props.isSmall === true) {
    // on rajoute la classe 'is-small'
    classes +=' is-small'
  }
  if (props.isPrimary === true) {
    // on rajoute la classe 'is-small'
    classes +=' is-primary'
  }


  return (
<div>

  <button className={classes}> {props.children} </button>
</div>

  )
}

export default CoolButton