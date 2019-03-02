// kogato edin element e izbran, tozi komponent zaema celiq ekran i go zatymnqva
//taka vsichko naokolo stava tymno, samo izbraniq element ostava svetyl
import React from 'react'
import styles from './Backshadow.module.css'

const backShadow = props =>{
    return <div className={styles.backShadow}
                onClick={props.onClick}>
           </div>
        
}
export default backShadow;