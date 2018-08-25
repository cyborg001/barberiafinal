import './index.css';
import Precios from './Precios';
var React = require('react');

class Jumbotron extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let maincolor=this.props.colores.mainColor;
		let secondcolor=this.props.colores.secondColor;
		let lista = this.props.lista;
		let i = 0;
		let v = lista.map((n)=>{
			return <Precios titulo={n['titulo']} desc={n['desc']}/>
		})
		return(
			<div className='jumbotron' style={{background:maincolor,color:secondcolor}}>
				<nav className="navbar  navbar-default navbar-fixed-top" style={{background:maincolor}}>
				  <div className="container">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span> 
				      </button>
				      <a className="navbar-brand " style={{color:'black'}} href="#" >Home</a>
				    </div>
				    <div className="collapse navbar-collapse"  id="myNavbar">
				      <ul className="nav navbar-nav navbar-right" data-target='#myNavbar' data-spy="scroll" style={{height:'100px'}}>
				  		
						<li className='dropdown'>
							<a className='dropbtn'href="#">RESERVAS
								<i className="fa fa-caret-down"></i>
							</a>
							<div className="dropdown-content nav navbar-nav">
							    <li className='active' ><a href="#" onClick={this.props.handleReservas} >Reservas</a></li>
							    <li><a href="https://barberapi2.herokuapp.com/api" onClick={this.props.handleTurnos}>Lista de turnos </a></li>
							  </div>
						</li>
						
				        <li><a href="#servicios">SERVICIOS</a></li>
				        <li><a href="#cortes">GALERIA DE CORTES</a></li>
				        <li><a href="#precios" onClick={this.props.handlePrecios}>PRECIOS</a></li>
				        <li><a href="#contacto">CONTACTO</a></li>
				        <li><a href="#mapa">GOOGLE MAP</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
				<h1 style={{color:'black'}}>WaZ Cutz' n 'Style Barbershop</h1>
				<div id="myModal" className="modal" >
				  <div className="modal-content" style={{background:'orange'}}>
				  	<div className='modal-header'>
					    <span className="close" onClick={this.props.handleSpan}>&times;</span>
					    <h1 style={{color:'darkblue'}}>Precios</h1>
					</div>
					<div className='modal-body'style={{background:'black'}}>
					    {v}
				  	</div>
				  	<div className='modal-footer'>
				  	</div>
				</div>

			</div>
		</div>
		);
	}
}
export default Jumbotron;
