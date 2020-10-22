import React from 'react';
import 'bulma/css/bulma.css';


function CoolButton (props) {
    const buttonClass = {
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
    }
  
    let addClass = () => {
        const arr = [];

        arr.push('button')
        arr.push(props.className)

        // pour toutes les props (Object.keys(props).forEach(k => props[k]))
        //   si elle figure dans l'objet buttonClass
        //     Alors, on rajoute dans arr, la classe correspondante
        Object.keys(props).forEach(k => Object.keys(buttonClass).includes(k) ? arr.push(buttonClass[k]) : arr)
        return arr.join(' ');
    }
    return (
    <button  className={addClass()}>{props.children}</button>
    )
}

export default CoolButton;