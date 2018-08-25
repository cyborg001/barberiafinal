import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from'./Jumbotron.js';
import Nav from'./Nav.js';
import Servicios from './Servicios.js';
import Portafolio from './Portafolio';
import Contacto from './Contacto';
import Mapa from './Mapa';
import Footer from './Footer';
import Reservas from './Reservas';
//import ListaClientes from './ListaClientes';
class App extends Component {
  constructor(props){
    super(props)
    this.state={

      colores:{mainColor:'lightblue',
              secondColor:'#f4511e',
              bg2Color:'#004883',
            },
      listaPrecios:[{titulo:'Cortes',desc:'Adulto con afeitada $200 '+
                      'Niños $100'},
                      {titulo:'Manicure',desc:'$200'},
                      {titulo:'Pedicure',desc:'$200'},
                      {titulo:'Cejas',desc:'Sencillo $50'},
                      {titulo:'Afeitada',desc: '$100'}
                      ],
      listaCortes:[],
      listaManicure:[],
      item:{},
      hora:new Date(),
      cortes:true,
      manicure:false,



    }
    this.handleResSpan.bind(this);
  }

visualizarLista(){
  
}
handleCortes(){
  this.setState({cortes:true});
  this.setState({manicure:false});
}
handleManicure(){
  this.setState({manicure:true});
  this.setState({cortes:false});
}




  handlePrecios(){
    let modal = document.getElementById('myModal');
     modal.style.display = "block";
  }
   handleReservas(){
    let modal = document.getElementById('reservas1');
     modal.style.display = "block";
  }
   handleTurnos(){
    let modal = document.getElementById('turnos1');
     modal.style.display = "block";
  }

  handleTurnoSpan(){
    let modal = document.getElementById('turnos1');
    modal.style.display= 'none';
  }
  handleSpan(){
    let modal = document.getElementById('myModal');
    modal.style.display= 'none';
  }
  handleResSpan(){
    let modal = document.getElementById('reservas1');
    modal.style.display= 'none';
  }
  handleWindow(event){
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }

  }
  render() {
    return (
     <div className='App' handleWindow={this.handleWindow.bind(this)} style={{minWidth:'600px'}}>
      <Jumbotron handlePrecios={this.handlePrecios.bind(this)} lista = {this.state.listaPrecios}
      handleWindow={this.handleWindow.bind(this)} colores={this.state.colores} 
      handleReservas={this.handleReservas.bind(this)} handleTurnos={this.handleTurnos.bind(this)} />
      <Nav colores={this.state.colores}/>
      <Servicios colores={this.state.colores}/>
      <Portafolio colores={this.state.colores}/>
      <Contacto colores={this.state.colores}/>
      <Reservas handleCortes={this.handleCortes.bind(this)} handleManicure={this.handleManicure.bind(this)}
       vcolores={this.state.vcolores} cortes={this.state.cortes} handleResSpan={this.handleResSpan.bind(this)} 
      manicure={this.state.manicure}/>
      //<ListaClientes handleTurnoSpan={this.handleTurnoSpan.bind(this)}/>
      <Mapa colores={this.state.colores}/>
      
      <Footer />
     
     </div>

    );
  }
}

export default App;
