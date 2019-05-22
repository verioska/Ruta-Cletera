import React, { Component } from 'react';
import '../Footer/Footer.css'
import User from '../User/User'
class Footer extends Component{
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //      user:false
    
    //     }
    
    //     this.functionUser = this.functionUser.bind(this);
       
    //   }

    //   functionUser(){
    //       this.setState({
    //       ...this.state,
    //       user:true
    //     });
    //     //  
    //   }
    render(){
        return(
            <div>
            <footer className="footer">
                
            <div className="container" >
            <div className="row">
                <i className="far fa-newspaper icon"></i>
                <i onClick={this.props.map}  className="fas fa-map-marked-alt icon"></i>
                <i onClick={this.props.onClik} className="far fa-user icon"></i>
               
                


            </div>
            </div>
            </footer> 
                {/* {this.state.user &&
                
                    <User/>
                } */}
        </div>
        )
    }
}
export default Footer