import './index.css'
var React = require('react');
class Precios extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let lista = this.props.lista;
		let colores='#004883';
		let dis ='inline'
		return(
			<div class="container-fluid">
  				<div class="text-center">
    				<h2>Precios</h2>
  				</div>
  				<div class="row">
  				</div>
  			</div>
		);
	}
}
export default Precios;