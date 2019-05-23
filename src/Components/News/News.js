import React, { Component } from 'react';
import './News.css';

class News extends Component{

    render(){
        return(
            <div>
              
                
                <h5 id="title">Recomendaciones para ti</h5>

                <div id="recomendation">

                <div>
                    <img className="imgBike" src="https://i.ibb.co/TTgVSXY/img-travel.jpg" alt=""/>
                </div>

                <div className="footerImg">
                    <p className="textLabel">Ruta turistica</p>
                    <img id="iconTuristic" className="iconImg" src="https://i.ibb.co/GC6zqgG/cycling-4-1.png" alt=""/>
                    <img id="iconParkin" className="iconImg" src="https://i.ibb.co/98QLg0Z/parking-1.png" alt=""/>
                    
                </div>

                </div>

                <div id="recomendation2">

                <div >
                    <img className="imgBike" src="https://i.ibb.co/W5bXj7s/arrow-direction-one-way-536.png" alt=""/>
                </div>

                <div>
                    <p className="textLabel">Problemas en la via</p>
                    <img id="iconBrokenRoute"className="iconIMg" src="https://i.ibb.co/rv30Qdv/Group-11.png" alt=""/>
                    

                </div>

                </div>

                </div>

           
        )
    }
}

export default News;