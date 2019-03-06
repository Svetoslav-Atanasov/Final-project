import React from "react";
import styles from "./LoginPage.module.css";
import LoginBox from '../LoginBox/LoginBox';
import Button from '../UI/Button/Button';
import { withRouter } from 'react-router-dom';;
// stateful - create class
//
// export накуп със създаването на класа е възможно (вместо на последния ред)

const additionalRegisterButtonStyling = {marginLeft: "105px"}

const loginPage = props => {

    // goToReg = () => {
    //     this.props.history.push('/Register')
    // }
        return (
            <div className={styles.login}>
                <LoginBox/>
                <Button style={additionalRegisterButtonStyling} title ="Register" onClick={()=>props.history.push('/Register')}/>
            </div>
        )
    }
    

export default withRouter(loginPage)