import React, { Component } from 'react';
import '../Share/imgShare.css'

class Share extends Component{
    
    render(){
        console.log("hola")
        
        return(
            <div >
                <img className="imgRoute" src="https://i.ibb.co/MnXX4D0/ruta.jpg" alt="ruta" border="0"/>
           
            <p className="tittleShare">Tu ruta ha sido guardada</p>
        </div>

        )
    }
}
export default Share