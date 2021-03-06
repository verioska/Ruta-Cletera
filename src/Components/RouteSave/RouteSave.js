import React, { Component } from 'react';
import '../RouteSave/RouteSave.css'

class RouteSave extends Component {

    render() {


        return (
            <div className="save">


                <h3 id="textSave">Mis rutas</h3>
                <div id="saveRoute">

                    <div>
                        <img className="imgMap" src="https://i.ibb.co/6X4SMGP/Captura-de-pantalla-2019-05-22-a-las-13-44-08.png" alt="" />
                    </div>

                    <div className="footerMap">
                        <p className="textLabel">Ruta turistica</p>
                        <i onClick={this.props.btnShare} class="far fa-share-square"></i>

                    </div>

                </div>

                <div id="saveRoute2">

                    <div>
                        <img className="imgMap" src="https://i.ibb.co/ygzZQNs/Captura-de-pantalla-2019-05-22-a-las-13-40-38.png" alt="" />
                    </div>

                    <div className="footerMap">
                        <p className="textLabel">Ruta diaria</p>
                        <i onClick={this.props.btnShare} id="iconShareSquare"class="far fa-share-square"></i>

                    </div>

                </div>

            

            </div>

        )
    }
}
export default RouteSave