import React from 'react'
import styles from "./SideMenu.module.css"

const sideMenu = props =>{
    let classes=[styles.sideMenu];
    if(props.show){
        classes.push(styles.open)
    }
return(
    <nav className={classes.join(' ')}>
        <ul>
            <li>
                <p>Kategoriq 1</p>
            </li>
            <li>
                <p>Kategoriq 2</p>
            </li>
            <li>
                <p>Kategoriq 3</p>
            </li>
        </ul>
    </nav>
)
}

export default sideMenu;
