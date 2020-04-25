import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentPlace: 0,
      finishPlace: 6,
      raceStart: false,
      raceMessage: "",
      winCondition: false,
      winnerName: "",
      racers: []
    }
  }

  inputAttribute = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputRacers = () => {
    return (
      <div>
        <p>NAME:</p>
        <input 
          placeholder="Contestant Name" 
          name="name" 
          type="text"
          value={this.state.name} 
          onChange={(e) => this.inputAttribute(e)}/>
        <Button variant="contained" color="primary" onClick={() => this.inputBtn()}>
          Add Racer!
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.startRace()}>
          Start Race!
        </Button>
      </div>
    )
  }

  inputBtn = () => {
    let newRacer = {
      id: Date.now(),
      name: this.state.name,
      currentPlace: this.state.currentPlace
    }
    let newRacers = this.state.racers;
    newRacers.push(newRacer);
    this.setState({ racers : newRacers });
    this.setState({ name: "" });
  }

  startRace = () => {
    this.setState({ raceStart : true });
    let numRacers = this.state.racers.length
    let randomIndex = Math.floor((Math.random() * numRacers));
    let racerUpdate = this.state.racers;      racerUpdate[randomIndex].currentPlace++;
    this.setState({ racers : racerUpdate });
    if ((racerUpdate[randomIndex].currentPlace === this.state.finishPlace)) {
      this.setState({ winCondition : true })
      let message = racerUpdate[randomIndex].name + " is the winner!!"
      this.setState({ raceMessage : message})
    }
    setTimeout(() => {
      if(this.state.winCondition === false){
        this.startRace()
      }
    }, 800)
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
      let racePosition = `racer place${racer.currentPlace}`
      return (
        <div key={racer.id} className={racePosition}>
          <p>{racer.name}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <h1>Dubious Derby!</h1>
        <section className="raceCourse">
          {displayRacers}
        </section>
        {this.state.raceStart ? <p>Race Started!</p> : this.inputRacers()}
        {this.state.raceMessage}
      </div>
    );

  }
}

export default App;
