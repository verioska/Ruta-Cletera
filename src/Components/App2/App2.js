import React, { Component } from 'react';
import App from '../../App'
import Screen from '../Screen/Screen'

class App2 extends Component{
        constructor(props) {
          super(props);
      
          this.state = {
           screenOn:true,
      
          }
      
          this.functionScreenOn=this.functionScreenOn.bind(this);
        }
 functionScreenOn(){
    this.setState({
        ...this.state,
        screenOn:false
      
  
      })
}
    render(){
       
        
        return(
            <div>
                    {this.state.screenOn &&
                <Screen onclikscreen={this.functionScreenOn}/>}
                {!this.state.screenOn &&

                <App/>
                }
            </div>

        )
    }
}
export default  App2