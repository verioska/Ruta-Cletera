import React, { Component } from 'react';
import './Profile.css';



class Profile extends Component{
    render(){
        return(
            <div className="profile">
          
            
            <div className="header-profile">
            {/* <i class="fas fa-user-circle"></i> */}
            <a href=".#"><img className="userImage" src="https://i.ibb.co/sQNBr7s/Whats-App-Image-2019-05-22-at-6-44-06-PM.jpg" 
            alt="userImage" border="0"/></a>
            </div>

            <div id="profileRoutes">
            <button id="lastRoutes">ULTIMOS VIAJES</button>
            <button id="myRoutes">RUTAS GUARDADAS</button>

            </div>
    
               

            </div>
        )
    }
}
export default Profile