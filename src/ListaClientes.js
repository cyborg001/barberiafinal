import './listaclientes.css';
var $ = require('jquery');
var React = require('react');

class ListaClientes extends React.Component{
	constructor(props){
		super(props);
		this.state={
      		vcolores:["#C21460", "#347B98", "#FCCB1A", "#F7F0D4", "#092834"],
      		api:[],
		};
	}
	componentDidMount(){
		alert(typeof(fetch))
		fetch('https://barberapi2.herokuapp.com/api/?')
		.then((resp)=>resp.json())
		.then((data)=>{
			alert(data);
		});
	}
	
	
	render(){
		return(
			<div id="turnos1">
				<span id='spanListaClientes'onClick={this.props.handleTurnoSpan}>X</span>
				<div class='row text-center'>
					<h2>LISTADO CLIENTES</h2><br />
					<div id='relleno1'class='col-xs-3'>{this.state.api}</div>
					<div id='lcortes' class='col-xs-3 listas'>juan sanchez</div>
					<div id='lmanicure' class='col-xs-3 listas'>ricardo arjona</div>
					<div id='relleno2'	class='col-xs-3'></div>
				</div>
				<br />
			</div>
		)}
}
export default ListaClientes;
