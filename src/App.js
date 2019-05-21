import React, { Component } from 'react';
import Map from './components/Map';
import Search from './components/Search/Search';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app_id: "dPPKrUEpsqpYWIAVcmLD",
      app_code: "4Uosgp7aDFaZc0VoxXZTEg",
      startPoint: {
        lat: '',
        long: '',
      },
      endPoint: {
        lat: '',
        long: '',
      },

    }

    this.functionCoordinates = this.functionCoordinates.bind(this);
   
  }

  componentDidMount() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            ...this.state,
            lat: position.coords.latitude,
            long: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          // alert(error.message)
          this.setState({
            ...this.state,
            error: error.message
          })
        }
      );
    }
  }

  async functionCoordinates (start, end) {
    this.startPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + start)
      .then(data => data.json())
      .then(data => {
        console.log(data,"esta")
        return {
          lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
          long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
          address: data.Response.View[0].Result[0].Location.Address.Label,
        }
      })
    this.endPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + end)
      .then(data => data.json())
      .then(data => {
        return {
          lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
          long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
          address: data.Response.View[0].Result[0].Location.Address.Label,
        }
      })

    this.setState({
      ...this.state,
      startPoint: {
        ...this.startPoint

      },
      endPoint: {
        ...this.endPoint
       
      },
   
    })

  }

  render() {
    return (
      <div className="App">
        <Map
          app_id={this.state.app_id}
          app_code={this.state.app_code}
          lat="-33.4489"
          lng="-70.6693"
          zoom="13"
          startPoint={this.state.startPoint}
          endPoint={this.state.endPoint}
     
        />
       <Search  coordinates={this. functionCoordinates}/>

      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import Map from './Map';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           theme: 'normal.day',
//       }

//       this.onChange = this.onChange.bind(this);
//   }
//   componentDidMount() {
//     if (navigator.geolocation) {
//       console.log(navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           this.setState({
//             ...this.state,
//             lat: position.coords.latitude,
//             long: position.coords.longitude,
//             error: null,
//           });
//         },
//         (error) => {
//           // alert(error.message)
//           this.setState({
//             ...this.state,
//             error: error.message
//           })
//         }
//       );
//     }
//   }

//   onChange(evt) {
//       evt.preventDefault();

//       var change = evt.target.id;
//       this.setState({
//           "theme": change,
//       });
//   }

//   render() {
//       return (
//           <div className="App">
//               < Map
//                   app_id="dPPKrUEpsqpYWIAVcmLD"
//                   app_code="4Uosgp7aDFaZc0VoxXZTEg"
//                   lat="42.345978"
//                   lng="-83.0405"
//                   zoom="13"
//                   theme={ this.state.theme }
//               />
//               {/* <ThemeSelector changeTheme={ this.onChange } /> */}
//           </div>
//       );
//   }
// }



// export default App;
