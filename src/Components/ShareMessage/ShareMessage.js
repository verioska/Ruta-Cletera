import React, { Component } from 'react';
import '../ShareMessage/ShareMessage.css'

class ShareMessage extends Component{

    render(){
        return(
            <div>
                <img id="share-image"src="https://i.ibb.co/6PYsjPy/Ride-Image.jpg" alt=""/>
                <p id="text-share">Tu ruta fue compartida <br/>
                exitosamente con la comunidad.</p>
               

            </div>
        )
    }
}
export default ShareMessage;
    