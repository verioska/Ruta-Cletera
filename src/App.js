import React, { Component } from 'react';
import Map from './Components/Map/Map';
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import  FormSave from './Components/FormSave/FormSave'
import Share from './Components/Share/Share'
import  RouteSave from './Components/RouteSave/RouteSave'
import News from './Components/News/News'
import Modal from './Components/Modal/Modal'

// import Screen from './Components/Screen/Screen'

import ShareMessage from './Components/ShareMessage/ShareMessage';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app_id: "dPPKrUEpsqpYWIAVcmLD",
      app_code: "4Uosgp7aDFaZc0VoxXZTEg",
      user:false,
      map:false,
      btnguardar:false,
      share:false,
      news:false,
      modal:false,
      finalize:false,
      screen:true,
       btnRouteSave: false,
       btnShare:false,

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
    this.functionUser = this.functionUser.bind(this);
    this.functionMap = this.functionMap.bind(this);
    // this.functionShare = this.functionShare.bind(this);
    this.functionNews = this.functionNews.bind(this);
    this.functionModal = this.functionModal.bind(this);
    this.functionCloseModal = this.functionCloseModal.bind(this);
    this.functionGuardar = this.functionGuardar.bind(this);
    this.functionfinalize = this.functionfinalize.bind(this);
    this.seeRouteSave=this.seeRouteSave.bind(this);

    // this.functionScreen=this.functionScreen.bind(this);

    this.shareRoute=this.shareRoute.bind(this);
  }


  shareRoute(){
    this.setState({
      ...this.state,
      btnShare:true,
      user:false,
      map:false,
      login:false,
      share:false,
      news:false,
      modal:false,
      btnguardar:false,
      btnRouteSave: false,

    })

  }
  // functionScreen(){
  //   this.setState({
  //     ...this.state,
  //     user:true,
  //     map:true,
  //     btnguardar:true,
  //     share:true,
  //     news:true,
  //     modal:false,
  //     finalize:false,
  //     screen:false,
  //      btnRouteSave: true,
  //   })

  // }

  seeRouteSave(){
    this.setState({
      ...this.state,
      btnRouteSave:true,
      user:false,
      map:false,
      btnguardar:false,
      share:false,
      news:false,
      modal:false,
      finalize:false,
      screen:false,

      btnShare:false,
 
    })

  }

  functionfinalize(){
    this.setState({
      ...this.state,
      modal:false,
      share:false,
      user:false,
      map:false,
      btnguardar:false,
      news:false,
      finalize:true,
      btnRouteSave:false,

      screen:false,

      btnShare:false,

   
    });
  }
  functionGuardar(){
    this.setState({
      ...this.state,
      modal:false,
      share:false,
      user:false,
      map:false,
      btnguardar:true,
      news:false,
     finalize:false,
     btnRouteSave: false,

     screen:false,

     btnShare:false,

    });
  }

  functionCloseModal(){
    this.setState({
      ...this.state,
      modal:false,
      share:false,
      user:false,
      map:false,
      btnguardar:true,
      news:false,
     finalize:false,
     btnRouteSave: false,

     screen:false,

     btnShare:false,

    });
}
  functionModal(){
    this.setState({
      ...this.state,
      modal:true,
      share:false,
      user:false,
      map:true,
      login:false,
      news:false,
      btnguardar:false,
      finalize:false,
      btnRouteSave: false,

      screen:false,

      btnShare:false,

    });

  }

  functionNews(){
    this.setState({
    ...this.state,
    news:true,
    share:false,
    user:false,
    map:false,
    login:false,
    modal:false,
    btnguardar:false,
    finalize:false,

     btnRouteSave: false,
     screen:false,
    btnRouteSave: false,
    btnShare:false,

    });
  //  
}

//   functionShare(){
//     this.setState({
//     ...this.state,
//     share:true,
//     user:false,
//     map:false,
//     login:false,
//     news:false,
//     modal:false
 
//   });
//   //  
// }

  functionUser(){
    this.setState({
    ...this.state,
    user:true,
    map:false,
    login:false,
    share:false,
    news:false,
    modal:false,
    btnguardar:false,
    btnRouteSave: false,
   screen:false,
    btnShare:false,

  });
  //  
}


functionMap(){
  this.setState({
  ...this.state,
  map:true,
  user:false,
  btnRouteSave:false,
  screen:false,
});
//  
}

  componentDidMount() {
    
    this.setState({
      ...this.state,
      map:true,
      user:false,
      login:false
    
    });
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
         {/* <Screen onclikscreen={this.functionScreen}/> */}
         
        <Navbar  coordinates={this.functionCoordinates}/>
        {this.state.user &&
                
                <Profile
                btnSaveRoute={this.seeRouteSave}/>
            }

            {this.state.btnRouteSave && <RouteSave
            btnShare={this.shareRoute}
            />}

            {this.state.btnShare && <ShareMessage/>}


        
        {this.state.map && 
                
                <Map
                  app_id={this.state.app_id}
                  app_code={this.state.app_code}
                  lat="-33.4489"
                  lng="-70.6693"
                  zoom="13"
                  startPoint={this.state.startPoint}
                  
                  endPoint={this.state.endPoint}
                 
                  // share={this.functionShare}
                  modal={this.functionModal}
                  />
              
            }  
             {this.state.btnguardar && 
             < FormSave finalize={this.functionfinalize}/>   }

             {this.state.finalize && 
            <Share/>   } 
          

            {this.state.news && 
            < News/>   }
             {
               this.state.modal &&
               <Modal closeModal={this.functionCloseModal}
               btnguardar={this.functionGuardar}/>
             }
          
      
      

       <Footer onClik={this.functionUser}
       map={this.functionMap}
       news={this.functionNews}/>
      

     

       

      </div>
    );
  }}
  export default App;



