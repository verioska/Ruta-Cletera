import React, { Component } from 'react';

class Search extends Component {
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
          <div className="App">
             <input onChange={(event) => this.functionStart(event)}  value={this.state.start} placeholder="Inicio"></input>
             <input onChange={(event) => this.functionEnd(event)}  value={this.state.end}placeholder="Fin"></input>
             <button onClick={() => this.props.coordinates(this.state.start, this.state.end)}>Buscar ruta</button>
          </div>
      );
  }
}



export default Search;
