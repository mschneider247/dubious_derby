import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css'
import { Button, Typography, Tooltip, Input } from '@material-ui/core';
import styled from 'styled-components';
import racetrack from './images/racetrack.jpg'
import DDBack from './images/DDBack.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentRound: 0,
      currentPlace: 0,
      finishPlace: 7,
      raceStart: false,
      showStats: true,
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
      <InputRacers>
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
      </InputRacers>
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

  deleteRacer = (id) => {
    let smallerRoster = this.state.racers
    smallerRoster.forEach((racer, i) => {
      if (racer.id === id) {
        smallerRoster.splice(i, 1)
      }
    })
    this.setState({ racers : smallerRoster })
  }
s
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
      this.winner(racerUpdate, randomIndex)
    }
    setTimeout(() => {
      if(this.state.winCondition === false){
        this.startRace()
      }
    }, 700)
  }

  reRace = () => {
    let refreshRacers = this.state.racers.map(racer => {
      let resetRacer = {}
      resetRacer.id =  racer.id;
      resetRacer.name = racer.name;
      resetRacer.icon = racer.icon;
      resetRacer.currentPlace = 0;
      return (
        resetRacer
      )
    })
    this.setState({ currentRound: 0 })
    this.setState({ winCondition: false })
    this.setState({ racers: refreshRacers })
  }

  winner = (racerUpdate, randomIndex) => {
    this.setState({ winCondition: true });
    this.setState({ raceStart: false })
    let message = racerUpdate[randomIndex].name + " is the winner!!";
    this.setState({ raceMessage: message });
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
      let racePosition = `racer place${racer.currentPlace}`
      return (
        <div key={racer.id} className={racePosition}>
          <DeleteBtn onClick={() => this.deleteRacer(racer.id)}>
            🗡
          </DeleteBtn>
          <Typography variant="h4">
            {racer.icon}
          </Typography>
          <br/>
          <Typography variant="h5">
            {racer.name}
          </Typography>
        </div>
      );
    })

    if (this.state.showStats) {
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
      setTimeout(() => {
        this.setState({ lastRacers : sortedRacers})
      }, 500);
    }

    return (
      <GameBoard>
        <Header>
          <TitleAndRules>
            <Typography variant="h2">Dubious Derby</Typography>
            <Rules>
              <li>Welcome to Dubious Derby!</li>
              <li>Enter in New Contestants below.</li>
              <li>When you're ready hit start!</li>
              <li>The winner is the first to the finish line!</li>
            </Rules>
            {this.state.raceStart === false && this.inputRacers()}
          </TitleAndRules>
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
        {this.state.lastRacers.length > 0 && (
          <Body>
            <RaceStats>
              {this.state.lastRacers}
              <Button
                id="rerace_btn"
                variant="contained"
                color="primary"
                onClick={() => this.reRace()}
              >
                Reset Race!
              </Button>
            </RaceStats>
            <RaceMessage>{this.state.raceMessage}</RaceMessage>
          </Body>
        )}
        {this.state.racers.length >= 1 && (
          <RaceTrack>{displayRacers}</RaceTrack>
        )}
      </GameBoard>
    );

  }
}

export default App;

const GameBoard = styled.div`
  padding: 2%;
  color: white;
  height: 1000px;
`

const TitleAndRules = styled.div`
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 300px;
`;

const RaceMessage = styled.div`
  width: 700px;
  font-size: 30px;
  color: orange;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

const Rules = styled.ul`
  list-style-type: none;
  font-size: 1.5em;
`

const InputRacers = styled.div`
  margin-left: 40px;
  input {
    background: transparent;
    height: 32px;
    color: white;
    margin-right: 5%;
  }
`

const RaceStats = styled.div`
  margin: 0 0 40px 40px;
`;

const RaceTrack = styled.div`
  background-image: url(${racetrack});
  background-size: 100% 380px;
  background-repeat: repeat-y;
  padding: 2%;
`;

const DeleteBtn = styled.button`
  position: absolute;
  left: 5px;
  font-size: 22px;
  background: transparent;
  outline: none;
  border: none;
  &:hover:active {
    font-size: 40px;
    outline: none;
  }

`