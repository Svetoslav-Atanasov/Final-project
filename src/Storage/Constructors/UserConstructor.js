import React, { Component } from 'react';

    var id = 0;
    class User extends Component {
     
        constructor(username,password){
            this.id=++id;
            this.username=username;
            this.password=password;
        }        
    }
    
export default User
