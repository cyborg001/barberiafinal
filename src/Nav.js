import './index.css'
var React = require('react');
class Nav extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let colores='#004883';
		let dis ='inline'
		return(
			<div className='container-fluid' id='contenedor1' style={{background:colores}}>
			
				
							<img id='nav-image center-block' className='img-responsive' 
							style={{display:dis,height:'400px',width:'400px'}}src='https://dl.dropboxusercontent.com/s/aggu67d1vmw4hf6/wascar.jpeg?dl=0'>
							</img>
				
					<div style={{padding:'20px',display:'dis',width:'400px',height:'400px',background:'white'}}>
						<h1 style={{color:'red'}}>Horario</h1>
						<br />
						<h5 style={{fontSize:'14px'}}>
						<strong>
						<p>Lunes, Jueves y Viernes de 8:00am a 1:00pm</p> 
						<p>y</p>
						<p>de 9:00pm a 11:30pm</p>
						<p>tambien</p>
						<p>Sabados de 1:00pm a 5:00pm </p>
						<p>y</p>
						<p>Domingos de 8:00am a 5:00pm</p>
						</strong>
						</h5>
					</div>
			
			</div>
		);
	}
}
export default Nav;