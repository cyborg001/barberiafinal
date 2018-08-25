import './index.css'
var React = require('react');
class Precios extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let colores='blue';
		return(
			<div class="col-sm-4 col-xs-12" style={{paddingTop:'34px'}}>

		      <div class="panel panel-default text-center" >
		        <div class="panel-heading">
		          <h1>{this.props.titulo}</h1>
		        </div>
		        <div class="panel-body" style={{height:'150px'}}>
		          <h3 class='text-left'>{this.props.desc}</h3>
		        </div>
		        <div class="panel-footer">
		        </div>
		      </div>      
		    </div>  
		);
	}
}
export default Precios;