import React, { Component } from 'react';
import '../Modal/Modal.css'

class Modal extends Component{
    
    render(){
        return(
            <div onClick={this.props.closeModal}className="modal1">
             <div className="container1">
              <div className="modal2">

               
                <div>
                 <button onClick={this.props.btnguardar} className="btnGuardar">Guardar Ruta</button>
                </div>

                

              </div>
            </div>   
              
        </div>

        )
    }
}
export default Modal