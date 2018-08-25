import './index.css'

import {Map,Marker,GoogleApiWrapper} from "google-maps-react";
var React = require('react');

export class MapContainer extends React.Component{
	render(){
		const style = {
  			width: '100%x',
  			height: '300px'
		}
		let link ="https://www.google.com/maps/place/WaZ+Cutz'+n+'"
		+"Style/@18.521978,-69.8000883,18.5z/data=!4m12!1m6!3m5!1s0x8eaf8791836e8253:0xa589aa338c27af48!2sWaZ+Cutz'+n+'"
		+"Style!8m2!3d18.5218797!4d-69.799498!3m4!1s0x8eaf8791836e8253:0xa589aa338c27af48!8m2!3d18.5218797!4d-69.799498?hl=es"
		let color='white';
		return(

			<div id='mapa' style={{height:'300px',width:'100%',color:color}}>
			<h1>Locacion</h1>
			<a href={link} target={'_blanck'}>
			<Map  google={this.props.google} zoom={19} style={style}initialCenter={{
				lat:18.5218797,
				lng:-69.799498
			}}>
			
			 <Marker
    title={'The Wazcar Barbershop.\n'
    +'lat: 18.5218797, lng: -69.799498'}
    name={'SOMA'}
    position={{lat: 18.5218797, lng: -69.799498}} />
    	
			</Map>
			</a>
			<br />
			</div>
			
		)
	}
}

export default GoogleApiWrapper({
	apiKey:'AIzaSyBWID3uF1kbaTUFpk4b5yn5ZzCya_pXiLY'
})(MapContainer)

