(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(20)},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(10),s=n.n(i),r=(n(18),n(8)),c=n.n(r),u=n(11),p=n(1),l=n(3),d=n(4),h=n(6),f=n(5),g=n(2),m=n(7),w=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).platform=null,n.map=null,n.state={app_id:t.app_id,app_code:t.app_code,useHTTPS:!0,center:{lat:t.lat,lng:t.lng},zoom:t.zoom},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.platform=new window.H.service.Platform(this.state);var t=this.platform.createDefaultLayers(),e=this.refs["here-map"];this.map=new window.H.Map(e,t.normal.map,{center:this.state.center,zoom:this.state.zoom});var n=new window.H.mapevents.MapEvents(this.map);new window.H.mapevents.Behavior(n),new window.H.ui.UI.createDefault(this.map,t)}},{key:"componentDidUpdate",value:function(){var t=this;""!==this.props.startPoint.lat&&""!==this.props.endPoint.lat&&(this.routingParameters={mode:"fastest;pedestrian",waypoint0:"geo!"+this.props.startPoint.lat+","+this.props.startPoint.long,waypoint1:"geo!"+this.props.endPoint.lat+","+this.props.endPoint.long,representation:"display"},this.onResult=function(e){var n,a,o,i,s;console.log(e),e.response&&e.response.route&&(a=(n=e.response.route[0]).shape,s=new window.H.geo.LineString,a.forEach(function(t){var e=t.split(",");s.pushLatLngAlt(e[0],e[1])}),o=n.waypoint[0].mappedPosition,i=n.waypoint[1].mappedPosition,t.routeLine=new window.H.map.Polyline(s,{style:{strokeColor:"blue",lineWidth:2}}),t.startMarker=new window.H.map.Marker({lat:o.latitude,lng:o.longitude}),t.endMarker=new window.H.map.Marker({lat:i.latitude,lng:i.longitude}),t.map.addObjects([t.routeLine,t.startMarker,t.endMarker]),t.map.setViewBounds(t.routeLine.getBounds()))},this.router=this.platform.getRoutingService(),this.router.calculateRoute(this.routingParameters,this.onResult,function(t){alert(t.message)}))}},{key:"render",value:function(){return o.a.createElement("div",{ref:"here-map",style:{width:"100%",height:"400px",background:"grey"}})}}]),e}(o.a.Component),v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={start:"",end:""},n.functionStart=n.functionStart.bind(Object(g.a)(n)),n.functionEnd=n.functionEnd.bind(Object(g.a)(n)),n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"functionStart",value:function(t){this.setState(Object(p.a)({},this.state,{start:t.target.value}))}},{key:"functionEnd",value:function(t){this.setState(Object(p.a)({},this.state,{end:t.target.value}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},o.a.createElement("input",{onChange:function(e){return t.functionStart(e)},value:this.state.start,placeholder:"Inicio"}),o.a.createElement("input",{onChange:function(e){return t.functionEnd(e)},value:this.state.end,placeholder:"Fin"}),o.a.createElement("button",{onClick:function(){return t.props.coordinates(t.state.start,t.state.end)}},"Buscar ruta"))}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={app_id:"dPPKrUEpsqpYWIAVcmLD",app_code:"4Uosgp7aDFaZc0VoxXZTEg",startPoint:{lat:"",long:""},endPoint:{lat:"",long:""}},n.functionCoordinates=n.functionCoordinates.bind(Object(g.a)(n)),n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation&&(console.log(navigator.geolocation),navigator.geolocation.getCurrentPosition(function(e){t.setState(Object(p.a)({},t.state,{lat:e.coords.latitude,long:e.coords.longitude,error:null}))},function(e){t.setState(Object(p.a)({},t.state,{error:e.message}))}))}},{key:"functionCoordinates",value:function(){var t=Object(u.a)(c.a.mark(function t(e,n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id="+this.state.app_id+"&app_code="+this.state.app_code+"&searchtext="+e).then(function(t){return t.json()}).then(function(t){return console.log(t,"esta"),{lat:t.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,long:t.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,address:t.Response.View[0].Result[0].Location.Address.Label}});case 2:return this.startPoint=t.sent,t.next=5,fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id="+this.state.app_id+"&app_code="+this.state.app_code+"&searchtext="+n).then(function(t){return t.json()}).then(function(t){return{lat:t.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,long:t.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,address:t.Response.View[0].Result[0].Location.Address.Label}});case 5:this.endPoint=t.sent,this.setState(Object(p.a)({},this.state,{startPoint:Object(p.a)({},this.startPoint),endPoint:Object(p.a)({},this.endPoint)}));case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,{app_id:this.state.app_id,app_code:this.state.app_code,lat:"-33.4489",lng:"-70.6693",zoom:"13",startPoint:this.state.startPoint,endPoint:this.state.endPoint}),o.a.createElement(v,{coordinates:this.functionCoordinates}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.bdedd74f.chunk.js.map