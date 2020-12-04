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
      currentRound: 0,
      currentPlace: 0,
      finishPlace: 7,
      raceStart: false,
      raceReset: false,
      raceMessage: "",
      winCondition: false,
      winnerName: "",
      racers: [],
      icons: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "🥴", "🤢", "🤮", "🤒", "🤕", "🤑", "🤠", "😈", "👹", "💀", "👽", "👾", "🤖", "🎃", "🧠","😭", "😤", "🤬", "🤯", "🥶", "😱", "🐲"],
      lastRacers: [],
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
        {!this.state.raceStart &&
          <Tooltip title="Add Contestant!" arrow>
            <Button variant="contained" color="primary" onClick={() => this.inputBtn()}>
              +
            </Button>
          </Tooltip>
        }
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
    let round = this.state.currentRound;
    round++;
    this.setState({ currentRound : round })
    this.setState({ racers : racerUpdate });
    if ((racerUpdate[randomIndex].currentPlace === this.state.finishPlace)) {
      this.setState({ winCondition : true })
      let message = racerUpdate[randomIndex].name + " is the winner!!"
      this.setState({ raceMessage : message})
      this.setState({ raceStart : false })
      this.setState({ raceReset : true })
      this.setState({ currentRound: 'Winner!!'})
    }
    setTimeout(() => {
      if(this.state.winCondition === false){
        this.startRace()
      }
    }, 700)
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

    if (this.state.raceReset) {
      let lastRacerRoster = [];
      this.state.racers.forEach(racer => 
          lastRacerRoster.push(racer)
        );
      const sortedRacers = lastRacerRoster.sort((a, b) => {
        return b.currentPlace - a.currentPlace
      }).map((racer, index) => {
        return (
          <p>
            {index === 0 && "1st place: "}
            {index === 1 && "2nd place: "}
            {index === 2 && "3rd place: "}
            {index >= 3 && `${index + 1}th place: `}
            {racer.name}
          </p>
        );
      });
      this.setState({ raceReset: false })
      setTimeout(() => {
        this.setState({ lastRacers : sortedRacers})
      }, 500);
    }

    return (
      <GameBoard>
        <Header>
          <div>
            <Typography variant="h2">Dubious Derby</Typography>
            <Rules>
              <li>Welcome to Dubious Derby!</li>
              <li>Enter in New Contestants below.</li>
              <li>When you're ready hit start!</li>
              <li>The winner is the first to the finish line!</li>
            </Rules>
          </div>
          {this.state.lastRacers && (
            <LastRace>{this.state.lastRacers}</LastRace>
          )}
          <Tooltip title="Start the Race!" arrow>
            <Button
              id="start_btn"
              variant="contained"
              color="primary"
              onClick={() => this.startRace()}
            >
              {this.state.currentRound === 0
                ? "Start"
                : `Round: ${this.state.currentRound}`}
            </Button>
          </Tooltip>
        </Header>
        {!this.state.raceStart && this.inputRacers()}
        <RaceTrack>{displayRacers}</RaceTrack>
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

const LastRace = styled.div`
`

const RaceTrack = styled.div`
  background-image: url(${racetrack});
  background-size: 100% 100px;
  background-repeat: repeat-y;
  padding: 2%;
`