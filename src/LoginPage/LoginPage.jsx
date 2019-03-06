import React from "react";
import styles from "./LoginPage.module.css";
import LoginBox from '../LoginBox/LoginBox';
import Button from '../UI/Button/Button';
import { withRouter } from 'react-router-dom';;
// stateful - create class
//
// export накуп със създаването на класа е възможно (вместо на последния ред)


const loginPage = props => {

    // goToReg = () => {
    //     this.props.history.push('/Register')
    // }
        return (
            <div className={styles.login}>
                <LoginBox/>
                <Button title ="REGISTER" onClick={()=>props.history.push('/Register')}/>
            </div>
        )
    }
    

export default withRouter(loginPage)