import './index.css'
var React = require('react');
class Contacto extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let maincolor=this.props.colores.mainColor;
		let secondcolor=this.props.colores.secondColor;
		return(
			<div className="container-fluid " style={{background:maincolor,color:'black'}} id='contacto'>
  				<h2 className="text-center">CONTACTO</h2>
 				 <div className="row slideanim">
    				<div className="col-sm-5">
	    				<h4>
	      					<p>Contactanos y te devolveremos lo mas pronto posible.</p>
						    <p><span className="glyphicon glyphicon-map-marker"></span> Los Prados de San Luis, Sto Dgo Este</p>
						    <p><span className="glyphicon glyphicon-phone"></span> 829-557-7771</p>
						    <p><span className="glyphicon glyphicon-envelope"></span> grullonwascar@gmail.com</p> 
						</h4>
    				</div>
				    <div className="col-sm-7">
				    <form action='mailto:grullonwascar@gmail.com' method='post' enctype='text/plain'>
				      <div className="row">
				        <div className="col-sm-6 form-group">
				          <input className="form-control" id="name" name="name" placeholder="Nombre" type="text" required />
				        </div>
				      </div>
				      <textarea className="form-control" id="comments" name="comments" placeholder="Commentario" rows="5"></textarea><br/>
				      <div className="row">
				        <div className="col-sm-12 form-group">
				        	<button className="btn btn-default pull-right" type="submit">Enviar</button>
				        	<button className="btn btn-default pull-right" type="reset">Reset</button>
				        	
				        </div>
				      </div>
				      </form> 
				    </div>
  				</div>
			</div>
		);
	}
}
export default Contacto;