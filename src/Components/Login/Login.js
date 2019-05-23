import React, { Component } from 'react';
import '../Footer/Footer.css'

class Login extends Component{
    
    render(){
        return(
            <div>
           <button onClick={this.props.login}>Entrar</button>
              
        </div>

        )
    }
}
export default Login