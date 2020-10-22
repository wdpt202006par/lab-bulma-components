import React from 'react';

const btnClasses = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
};

const CoolButton = (props) => {
  let classes = "button";
  classes += " " + props.className;

  Object.keys(btnClasses).forEach(el => {
    const className = btnClasses[el]
    if (el in props) {
      classes += " " + className;
    }
  })

  return (
    <div>
      <button className={classes}>{props.children}</button>
    </div>
  )
}

export default CoolButton;


// AUTRE SOLUTION POUR FILTRER LES CLASSNAME 
/* 
const CoolButton = (props) => {
  const types = {
    "is-primary": "is-primary",
    "is-success": "is-success",
    "is-danger": "is-danger",
  };

  const className = props.className || "";
  const typesKeys = Object.keys(types);
  const propsKeys = Object.keys(props);
  const propClass = typesKeys.filter((el) => propsKeys.includes(el)).join(" ");
  const classes = `button ${className} ${propClass}`;
  return <button className={classes}>{props.text}</button>;
}
*/