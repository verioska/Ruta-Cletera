import React, { Component } from 'react';
import '../Screen/Screen.css'

class Screen extends Component{
    
    render(){
       
        
        return(
            <div>
                <div>
                    <img className="imgScreenOn" onClick={this.props.onclikscreen} src="https://i.ibb.co/rxjXz66/Ruta-Cletera.png" alt="Ruta-Cletera" border="0"/>
            
                </div>
            </div>

        )
    }
}
export default  Screen 