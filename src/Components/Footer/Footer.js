import React, { Component } from 'react';
import '../Footer/Footer.css'

class Footer extends Component{
    
    render(){
        return(
            <div>
            <footer className="footer">
                
            <div className="container" >
            <div className="row">
                <i  onClick={this.props.news} className="far fa-newspaper icon"></i>
                <i onClick={this.props.map}  className="fas fa-map-marked-alt icon"></i>
                <i onClick={this.props.onClik} className="far fa-user icon"></i>
               
                


            </div>
            </div>
            </footer> 
              
        </div>

        )
    }
}
export default Footer