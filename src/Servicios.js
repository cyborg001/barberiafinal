
import './index.css';
var React = require('react');
class Servicios extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let colores = this.props.colores;
		let maincolor = colores.mainColor;
		let secondcolor=colores.secondColor;
		return(
			<div id='servicios' className="container-fluid text-center " style={{background:maincolor}}>
			<br/><br/><br/>
			  <h2>SERVICIOS</h2>
			  <h4>Que Ofertamos</h4>
			  <br/>
			  <div className="row slideanim">
			  	<div className="col-sm-4">
			     	<span className="	fa fa-cut  logo-small"></span>
			     	<h4>Corte de pelo</h4>
			     	<p>Cortes para grandes y pequenos</p>
			   	</div>
			   	<div className="col-sm-4">
			     	<span className="fa fa-hand-paper-o  logo-small"></span>
			     	<h4>Manincure</h4>
			     	<p>Unas manos perfectas</p>
			   	</div>
			   	<div className="col-sm-4">
			     	<i class="material-icons logo-small">airline_seat_legroom_extra</i>
			     	<h4>pedicure</h4>
			     	<p>Unos pies delicados</p>

			   	</div>
			  </div>
			    <br/><br/>
			 
			</div>
		);
	}
}
export default Servicios;