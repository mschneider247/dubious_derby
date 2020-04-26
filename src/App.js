import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import './App.css'
import { Typography, Tooltip, Container } from '@material-ui/core';

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
      <Container maxWidth="xs">
        <Typography>
          Contestant Name:
        </Typography>
        <input 
          placeholder="Contestant Name" 
          name="name" 
          type="text"
          value={this.state.name} 
          onChange={(e) => this.inputAttribute(e)}/>
        <Tooltip title="Add Contestant!" arrow>
          <Button variant="contained" color="primary" onClick={() => this.inputBtn()}>
            +
          </Button>
        </Tooltip>
        <Tooltip title="Start the Race!" arrow>
          <Button variant="contained" color="primary" onClick={() => this.startRace()}>
            Start!
          </Button>
        </Tooltip>
      </Container>
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
          <Typography>
            {racer.name}
          </Typography>
        </div>
      )
    })

    return (
      <Container className="App" maxWidth="md">
        <Typography variant="h2">
          Dubious Derby
        </Typography>
        <section className="raceCourse">
          {displayRacers}
        </section>
        {this.state.raceStart ? <Typography>
          Race has started!!
        </Typography> : this.inputRacers()}
        {this.state.raceMessage}
      </Container>
    );

  }
}

export default App;
