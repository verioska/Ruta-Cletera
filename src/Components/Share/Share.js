import React, { Component } from 'react';
import '../Share/imgShare.css'

class Share extends Component{
    
    render(){
        console.log("hola")
        
        return(
            <div >
            <img className="imgShare" src="https://i.ibb.co/Fb34MFX/routacity.png" alt="routacity" border="0"/>
            <p className="tittleShare">Que quieres compartir?</p>
        </div>

        )
    }
}
export default Share