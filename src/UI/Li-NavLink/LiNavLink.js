import React from 'react';
import styles from './LiNavLink.module.css'
import { NavLink } from "react-router-dom";

const linavlink = props => {
    return (
        <li>
            <NavLink 
                exact to={props.to} 
                className={styles.ordinaryLink} 
                activeClassName={styles.ActiveLink}
                onClick={props.onClick} >
                
                <span className={styles.categoryName}>
                    {props.title}
                </span>
                {props.src ? <img width="40" height="40" src={props.src} /> : null}
                {props.otherComponent ? props.otherComponent : null}
                
                
            </NavLink>
        </li>
    )
}
export default linavlink
