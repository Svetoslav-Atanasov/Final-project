import React from 'react';
import classes from './Button.module.css'

const button = props => {
    return (
        <button 
            onClick={props.onClick} 
            className={classes.Button}
            style={props.style}
            //za dopylnitelen stil, mojem da gi zadadem, kato js obekti
            >
            {props.title}
        </button>
    )
}
export default button
