import React from "react";
import styles from "./RegisterPage.module.css";
import RegisterBox from '../RegisterBox/RegisterBox';
import Button from '../UI/Button/Button';
import { withRouter } from 'react-router-dom';;
// stateful - create class
//
// export накуп със създаването на класа е възможно (вместо на последния ред)

// const additionalRegisterButtonStyling = {marginLeft: "105px"}

const loginPage = props => {

    // goToReg = () => {
    //     this.props.history.push('/Register')
    // }
        return (
            <div className={styles.Register}>
                <RegisterBox/>
                {/* <Button style={additionalRegisterButtonStyling} title ="Register" onClick={()=>props.history.push('/Register')}/> */}
            </div>
        )
    }
    

export default withRouter(loginPage)