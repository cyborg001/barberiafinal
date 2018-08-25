import './index.css'
var React = require('react');
class Footer extends React.Component{
	constructor(props){
		super(props)
	}
	render(){

		return(
			<footer className="container-fluid text-center">
  				<a href="#" title="To Top">
    			<span className="glyphicon glyphicon-chevron-up"></span>
  				</a><br/>
  				<p>Codeado Por <a href="https://codepen.io/cyborg001" target='_blank' title='Visita mi pagina'>cgrs Scripts</a></p> 
			</footer>
		);
	}
}
export default Footer;
