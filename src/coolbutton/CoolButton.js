import React from 'react';


var classList = {
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


class CoolButton extends React.Component {
    render() {

        console.log("😡 PROPS ===", this.props);

        let classes = []
        classes.push(this.props.className) // ['is-rounded my-class']

        const keyList = Object.keys(classList);

        keyList.forEach(el => {
            console.log('el===', el)

            console.log('This.props[el]===', this.props[el])
            if (this.props[el]) {
                console.log(Object.values(classList[el]))
                classes.push(classList[el])
                console.log('classList.el ===', classList[el])
            }
        })


        var finalClasses = "button " + classes.join(" ");
        return (
            <div>
                <button className={finalClasses} >{this.props.children}</button>
            </div>
        )
    }
}

export default CoolButton