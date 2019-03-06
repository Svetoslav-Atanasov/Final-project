import React from "react";
import styles from "./profile.module.css";
import { connect } from "react-redux";


const profile = props => {
console.log('segashniq uzer e: ')
console.log(props.user)
      return ( <div>
                 <h2>Tova shte e tvoq profil </h2>
                
              </div>
      )
  }

  const mapStateToProps = state => {
    return {
    
      user: state.user.currentUser
    };
  };

  
  export default connect(mapStateToProps,null)(profile);
 