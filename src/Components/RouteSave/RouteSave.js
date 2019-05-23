import React, { Component } from 'react';
import '../RouteSave/RouteSave.css'

class RouteSave extends Component{
    
    render(){
        console.log("hola")
        
        return(
            <div className="RouteSave">
                <img className="imgShare" src="https://i.ibb.co/Fb34MFX/routacity.png" alt="routacity" border="0"/>
             
              <p  >Tu ruta ha sido guardada</p>
        </div>

        )
    }
}
export default  RouteSave