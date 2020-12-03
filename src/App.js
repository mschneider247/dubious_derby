import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css'
import { Button, Typography, Tooltip, Container, Input } from '@material-ui/core';
import styled from 'styled-components';
import racetrack from './images/racetrack.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentPlace: 0,
      finishPlace: 7,
      raceStart: false,
      raceMessage: "",
      winCondition: false,
      winnerName: "",
      racers: [],
      icons: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "🥴", "🤢", "🤮", "🤒", "🤕", "🤑", "🤠", "😈", "👹", "💀", "👽", "👾", "🤖", "🎃", "🧠","😭", "😤", "🤬", "🤯", "🥶", "😱", "🐲"]
    };
  }

  inputAttribute = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputRacers = () => {
    return (
      <Container maxWidth="xs">
        <Input 
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
      </Container>
    )
  }

  inputBtn = () => {
    let message = `${this.state.name} has been added to the race!`
    this.setState({ raceMessage: message})
    let newRacer = {
      id: Date.now(),
      name: this.state.name,
      currentPlace: this.state.currentPlace,
      icon: this.state.icons[Math.floor(Math.random() * this.state.icons.length)],
    }
    let newRacers = this.state.racers;
    newRacers.push(newRacer);
    this.setState({ racers : newRacers });
    this.setState({ name: "" });
  }

  startRace = () => {
    if (this.state.racers.length === 0) {
      this.setState({ raceMessage : "Add Contestants!"})
      return
    }
    this.setState({ raceMessage: "The race has started!!"})
    this.setState({ raceStart : true });
    let numRacers = this.state.racers.length
    let randomIndex = Math.floor((Math.random() * numRacers));
    let racerUpdate = this.state.racers;      
    racerUpdate[randomIndex].currentPlace++;
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
          <Typography variant="h4">
            {racer.icon}
          </Typography>
          <Typography variant="h5">
            {racer.name}
          </Typography>
        </div>
      );
    })

    return (
      <GameBoard>
        <Header>
          <Typography variant="h2">Dubious Derby</Typography>
          <Tooltip title="Start the Race!" arrow>
            <Button variant="contained" color="primary" onClick={() => this.startRace()}>
              Start!
            </Button>
          </Tooltip>
        </Header>
        <Rules>
          <li>Welcome to Dubious Derby!</li>
          <li>Enter in New Contestants below.</li>
          <li>When you're ready hit start!</li>
          <li>The winner is the first to the finish line!</li>
        </Rules>
        <RaceTrack>{displayRacers}</RaceTrack>
        {!this.state.raceStart ? this.inputRacers() : null}
        {this.state.raceMessage}
      </GameBoard>
    );

  }
}

export default App;

const GameBoard = styled.div`
  padding: 2%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Rules = styled.ul`
  list-style-type: none;
`

const RaceTrack = styled.div`
  background-image: url(${racetrack});
  background-size: 100% 100px;
  background-repeat: repeat-y;
  padding: 2%;
`