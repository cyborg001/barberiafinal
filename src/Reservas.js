import './reservas.css';
var React = require('react');

class Reservas extends React.Component{
	constructor(props){
		super(props);
		this.state={
      		vcolores:["#C21460", "#347B98", "#FCCB1A", "#F7F0D4", "#092834"],
		};
	}
	
	
	
	render(){
		return(

			<div class="container-fluid text-center" style={{background:this.state.vcolores[0]}}id='reservas1'>
			<span onClick={this.props.handleResSpan} id='spanx'>X</span>
	          <div style={{background:this.state.vcolores[2]}} id='header-reservas1'>
	            <h3 style={{color:this.state.vcolores[1]}}id='h3block'>Reservas</h3>
	          </div>
	          <form id='formulario1'class='fontsize' action='https://barberapi2.herokuapp.com/createCliente' method='post' 
	          style={{background:this.state.vcolores[4],color:this.state.vcolores[3]}}  >
	            <br/>
	             Nombre: &nbsp; <input id='nombreRes' ref='nombre' name ='nombre' maxlength="20" type='text' required/><br/>
	             Telefono:  &nbsp;<input id='telRes'ref='tel' name='telefono' maxlength='10' type='text'/><br/>
	             Corte: <input id='cortes' type='radio' ref='cortes' onChange={this.props.handleCortes} name='cortes' checked={this.props.cortes}/>
	             &nbsp;&nbsp;Pedicure/Manicure: <input id='manicure' ref='manicure'type='radio' name='manicure' checked={this.props.manicure}
	             onChange={this.props.handleManicure} />
	            
	            <br />
	            <br />
	            <div style={{color:this.state.vcolores[1]}} id='botones'>
	              <input id='cancelarRes' type='reset' value='Cancelar' />
	              <input id='aceptarRes' type='submit' onclick='handleItem(e)' value='Reservar' />
	            </div>
	            <br />
	             
	          </form>
	          
	    	</div>
		);
	}
}
export default Reservas;
