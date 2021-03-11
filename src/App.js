import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Bookstruck from './components/Booktruck/Booktruck';
import CheckSpace from './components/CheckSpace/CheckSpace';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      input:'',
      pris:'',
      route: 'firstpage',
      isSignedIn: false,
      spaceAvailable: false,  
      truckEuro82:''
  }
}

  calculateSpace = (a) => {
    const lastemeter = 2.4 * 1;
    let mult = 1;
    for (let i = 0; i <a.length; i++){
      mult= mult * a[i];
    }
    return mult/lastemeter;
  }


  onRouteChange = (route) => {
    if (route === 'signout' || route === 'firstpage') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  handleSpace = (e) => {
    console.log(e.target.value)
    this.setState({input: e.target.value});
    let spaceEuro82 = Math.floor(this.calculateSpace([13.6, 2.4, 2.5]));
    // let truckEuro92 = [13.6, 2.4, 2.8];
    // let truckMega = [13.6, 2.4, 3];
    console.log(spaceEuro82);
   this.setState({truckEuro82:spaceEuro82});
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.truckEuro82 > this.state.input){
      this.setState({spaceAvailable: true})
        console.log('Present space in the truck is: ', this.state.truckEuro82, 'lastemeter and Available space is: ', this.state.truckEuro82 - this.state.input, 'lastemeter')
      } else 
      return alert('Beklager! Ingen plass til å bestille')  
  }

  handlePris = (e) => {
    e.preventDefault();
    let pris;
    if (this.state.input < 5){
      pris = this.state.input*1200;
     
    } else if (this.state.input >= 5 || this.state.input <= 10){
      pris= this.state.input*1000;
    } else {
      pris= this.state.input*800;
    }
    this.setState({pris: pris});
  }

  render() {
    return ( 
      <div className="App">
        <ErrorBoundry>
        { this.state.route ==='firstpage'
        ? <div>
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            <h1 className='f1 dark-pink b '>Send pakker fra hjem til hjem 24/7</h1>
            <button onClick={() => this.onRouteChange('signin') } className='w-30 br4 grow f4 link ph3 pv2 dib white bg-light-purple' >Send pakken nå</button>
            <div className='f5 bg-yellow'>
              <p>Vi henter og leverer hjemme - også i helgene.</p>
              <p>Ingen grenser for størrelse og vekt.</p>
              <p>Helt enkelt med oss!</p> 
            </div>
            <div className='center pa4 br3 shadow-5 bg-light-yellow' >
              <p className='f2'>Spor pakken din</p>
              <input className='f4 pa2 w-30 center' type='text' placeholder='Legg inn din sporingskode' />
              <button onClick={() => this.onRouteChange('signin') } className='w-10 grow f4 link ph3 pv2 dib white bg-light-purple' ><i className='fa fa-search'></i></button>
            </div>
          </div>
        : this.state.route === 'home'
        ? <div>
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            <h1 className='f1 dark-pink b '>Send pakker fra hjem til hjem 24/7</h1>
            
              <div>  
                <CheckSpace handleSpace={this.handleSpace} onSubmit={this.onSubmit} />
              {this.state.spaceAvailable === true
                ? <div >
                  <p>De nåværende plassene i lastebilen er {this.state.truckEuro82} lastemeter</p>
                  <p>De ledige plassene er {this.state.truckEuro82 - this.state.input} lastemeter</p>
                  <Bookstruck handlePris={this.handlePris} />
                  <div className='f1 red'>Pris: {this.state.pris}</div>
                  </div>
                : <div className='f3 red' >Vær så snill å sjekk ledig plass før du kan gå videre!</div>
                }
              </div>
             
          </div>  
        : (
          this.state.route === 'signin'
          ? <div>
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            <h1 className='f1 dark-pink b '>Send pakker fra hjem til hjem 24/7</h1>
            <Signin onRouteChange={this.onRouteChange}/>
            </div>
          : <div>
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            <h1 className='f1 dark-pink b '>Send pakker fra hjem til hjem 24/7</h1>
            <Register onRouteChange={this.onRouteChange}/>
            </div>
          )
        } 
        </ErrorBoundry>
    </div>
    );
  }

}
 

export default App;
