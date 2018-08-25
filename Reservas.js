import './index.css';
var React = require('react');
class Reservas extends React.Component{
	constructor(props){
		super(props);
    this.state={
      item:{},
      cortes:true
    }

	}
  handleCortes(){
    this.setState({cortes:true});
  }
  handleManicure(){
    this.setState({cortes:false});
  }
  handleItem(e){
    let nombre=this.refs.nombrel.value;
    let tel = this.refs.tel.value;
    let serv='';
    if(this.refs.manicure.checked===true){
      serv=this.refs.manicure.id;
    }else{
      serv=this.refs.cortes.id;
    }
    if(nombre==='' || serv===''){
      alert('Debe completar el nombre y servicio deseado!')
    }
  }
	render(){
    let dir='/createCliente';
    //el siguiente bloque restringe los radio buttons a que solo uno este on
    let checkCortes=false;
    let checkMani = false;
    if(this.state.cortes===true){
      checkCortes=true;
      checkMani=false;
    }else{
      checkCortes=false;
      checkMani=true;
    }
		return(
			<div className="container-fluid modal text-center bg-grey" id='reservas' style={{width:'400px',height:'300px',top:'100px',padding:'0px'}}>
        <span className='close'onClick={this.props.handleResSpan}>&times;</span>
          <div id='header-reservas' className='modal-header'>
            <h3>Reservas</h3>
          </div>
  				<form action='/createCliente' method='post'>
           Nombre:  <input id='nombreRes' ref='nombre' name ='nombre'  type='text'/><br />
           Telefono: <input id='telRes'ref='tel' name='telefono' type='text'/><br />
           Corte: <input id='cortes' type='radio' ref='cortes' onChange={this.handleCortes.bind(this)} name='cortes'  checked={checkCortes}/>
           &nbsp;&nbsp;Pedicure/Manicure: <input id='manicure' ref='manicure'type='radio' name='manicure'
           onChange={this.handleManicure.bind(this)} checked={checkMani} />
           <div className='text-center' style={{paddingLeft:'45px'}}>
           <br />
            <input id='cancelarRes' type='reset' value='Cancelar' />
            <input id='aceptarRes' type='submit' onClick={this.handleItem.bind(this)} value='Reservar' />
           </div>

          </form>
    			<strong style={{color:'red'}}>{this.state.alerta}</strong>
			</div>
		);
	}
}
export default Reservas;
