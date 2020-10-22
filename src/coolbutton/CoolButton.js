import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {

  const classes = ['button']
  classes.push(props.className)

  console.log('props=', props)
  if (props.isSmall=== true) {
    // rajouter la classe 'is-small' ^
    classes.push('is-small')
  }

  if (props.isSuccess === true) {
    // rajouter la classe 'is-success' 
    classes.push('is-success')
  }else{
    classes.push('is-danger')
  }

  return (
    <button className={classes.join(' ')}>{props.children}</button>
  )
}

export default CoolButton;
