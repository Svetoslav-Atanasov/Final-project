import React, { Component } from 'react';

    var id = 0;
    class User extends Component {
     
        constructor(username,password){
            this.id=++id;
            this.username=username;
            this.password=password;
        }
        render(){
            return(
            <p>Username</p>
            )
        }
        
    }
    
export default User




// class Alcohol extends Component {
//     //React.Component za da vkarame komponenta // v edin klas, moje da imame drug klas// 
//     // ili go vkarvame gore { Component }
//     render(){
//         //kak shte izglejda edin alkohol na ekrana
//         //return () krygli skobi
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <p>{this.props.info}</p>
//                 <button onClick={this.props.onDelete}>Iztrii Me</button>
//                 {/* pri klik,ako obichash izvikai, ot tova koeto sa mi dali kato sw-swa funkciqta onDelete */}
//             </div>
//         );
//     }

// }