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
                
                <img width="40" height="40" src={props.src} />
                
            </NavLink>
        </li>
    )
}
export default linavlink
