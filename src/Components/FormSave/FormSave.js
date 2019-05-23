import React, { Component } from 'react';
import './FormSave.css'

class FormSave extends Component{
    
    render(){
        console.log("hola")
        
        return(
            <div className="RouteSave">

                <img className="imgShare" src="https://i.ibb.co/Fb34MFX/routacity.png" alt="routacity" border="0"/>

             <div>

              <p className="tittle">¿Qué tipo de ruta es?</p>

              <div className="input">
                <input type="radio" name="gender" /> Ruta diaria<br></br>
                <input id="seconInput" type="radio" name="gender" /> Ruta turística<br></br>
            </div>

             </div>

             <div>
             <p className="tittle">¿Visualisaste alguna de estas características durante tu viaje?</p>

             <div className="input2">
             <label class="container">
                 <input className="checkbox" type="checkbox" /> Estacionamiento de Bicicletas
                 <span className="checkmark"></span>
             </label>

             <label class="container">
                <input className="checkbox" type="checkbox"/> Problemas en la vía
                <span className="checkmark"></span>
            </label>
            </div>
             </div>

             <div className="containerBtn">
             <button className="btnCancelar">Cancelar</button>
             <button onClick={this.props.finalize} className="btnCancelar">Finalizar</button>

             </div>
        </div>

        )
    }
}
export default  FormSave