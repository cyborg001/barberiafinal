import './index.css';
var React = require('react');
class Portafolio extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let alto='300px';
		let maincolor=this.props.colores.bg2Color;
		let secondcolor=this.props.colores.secondColor;
		return(
			<div className="container-fluid text-center bg-grey" id='cortes' style={{background:maincolor,color:secondcolor}}>
  				<h2>Portafolio</h2>
  				<h4>Que hemos hecho</h4>
  				<div className="row text-center">
    				<div className="col-sm-4">
      					<div className="thumbnail slideanim">
        					<img className='img.thumbnail'  
        					src="corte1.jpeg"  alt="el logo"></img>
        					<p>By wazcar</p>
      					</div>
    				</div>
    				<div className="col-sm-4">
      					<div className="thumbnail slideanim">
        					<img className='img.thumbnail' 
        					src="corte2.jpg" alt="aqui va una imagen"></img>
        					<p>by wazcar</p>
      					</div>
    				</div>
    				<div className="col-sm-4">
      					<div className="thumbnail slideanim">
        					<img src="manicure.jpg"
        					alt="aqui va una imagen"></img>
        					<p>by wazcar</p>
      					</div>
    				</div>
    			</div>
			</div>
		);
	}
}
export default Portafolio;