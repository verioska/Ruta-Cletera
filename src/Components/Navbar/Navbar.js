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
          <div className="navbar">

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    <a class="navbar-brand" href="#">RutaCletera</a>

      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <i class="fas fa-search"></i>
      </button>

    <div>
      <i class="fas fa-ellipsis-v"></i>
    </div>

    </div>
    
    <div className="collapse navbar-collapse" id="myNavbar">
      
        <input onChange={(event) => this.functionStart(event)}  value={this.state.start} placeholder="Inicio"></input>
        <input onChange={(event) => this.functionEnd(event)}  value={this.state.end}placeholder="Fin"></input>
        <button onClick={() => this.props.coordinates(this.state.start, this.state.end)}>Buscar ruta</button>
    </div>

  </div>
</nav>
           
          </div>
      );
  }
}



export default Navbar;
