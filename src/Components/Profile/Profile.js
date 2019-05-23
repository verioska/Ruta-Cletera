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
              <button className="button"onClick={this.props.btnSaveRoute} id="myRoutes"><img id="saveImg" src="https://i.ibb.co/92vXgTF/floppy-disk-1.png" alt="saveIcon"/>Rutas Guardadas</button>
            </div>

            <div id="lastRoute">
           
            <p id="textLastRoute">Tu último viaje lo realizaste<br/>
             el día 24-05 a las 07:30, <br/>
            entre Providencia y Recoleta, <br/>
            recorriste 10km.</p>
            </div>
    
               

            </div>
        )
    }
}
export default Profile