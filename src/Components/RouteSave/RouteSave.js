import React, { Component } from 'react';
import '../RouteSave/RouteSave.css'

class RouteSave extends Component{
    
    render(){
        console.log("hola")
        
        return(
            <div className="RouteSave">
                
              <img className="img" src="https://i.ibb.co/BtZq7Dp/ruta.jpg" alt="ruta" border="0"/>
              <p className="tittle" >Tu ruta ha sido guardada</p>
        </div>

        )
    }
}
export default  RouteSave