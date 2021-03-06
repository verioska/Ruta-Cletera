import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        start: '',
        end: ''
      }
      this.functionStart = this.functionStart.bind(this);
      this.functionEnd = this.functionEnd.bind(this);
    
  }

  functionStart(event){
    this.setState({
        ...this.state,
        start: event.target.value
    })

  }
  functionEnd(event){
    this.setState({
        ...this.state,
        end: event.target.value
    })

  }
 

  render() {
      return (
          // <div className="navbar">

 <nav className="navbar navbar-inverse"> 


<a href=".#"><img id="logo" src="https://i.ibb.co/yk5DgYT/Group-1-1.png" alt="Logotype" border="0"/></a>
<div className="container-fluid">
<div className="navbar-header">  
    

    <div id="options">
    <button  type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span><i className="fas fa-search"></i></span>
    </button>

   
    </div>


    <div className="collapse navbar-collapse" id="myNavbar">
        <input className="inputRoute" onChange={(event) => this.functionStart(event)}  value={this.state.start} placeholder="Punto de Partida"></input>
        <input className="inputRoute" onChange={(event) => this.functionEnd(event)}  value={this.state.end}placeholder="Destino"></input>
       
       <div className="buttonSearch">
        <button id="search" onClick={() => this.props.coordinates(this.state.start, this.state.end)}>Buscar ruta</button>
        </div>

    </div>

  </div>  
  </div>  
</nav>
           
          // </div>
      );
  }
}



export default Navbar;