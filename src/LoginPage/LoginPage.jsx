import React from "react";
import styles from "./LoginPage.module.css";
import LoginBox from '../LoginBox/LoginBox'
// stateful - create class
// export накуп със създаването на класа е възможно (вместо на последния ред)
export default class LoginPage extends React.Component {

    render(){
        return (
            <div className={styles.login}>
                <LoginBox/>
            </div>
        )
    }
    
}