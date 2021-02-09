import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css'
import { Button, Typography, Tooltip, Input } from '@material-ui/core';
import styled from 'styled-components';
import racetrack from './images/racetrack.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentRound: 0,
      currentPlace: 0,
      finishPlace: 13,
      raceStart: false,
      raceMessage: "",
      winCondition: false,
      winnerName: "",
      racers: [],
      icons: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "🥴", "🤢", "🤮", "🤒", "🤕", "🤑", "🤠", "😈", "👹", "💀", "👽", "👾", "🤖", "🎃", "🧠","😭", "😤", "🤬", "🤯", "🥶", "😱", "🐲"],
      lastRacers: [],
      raceSpeed: 420,
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
      speedboost: false,
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

  boostRacer = (id) => {
    let boostRoster = this.state.racers
    boostRoster.forEach((racer, i) => {
      if (racer.id === id) {
        racer.speedboost = true;
      }
    })
    this.setState({ racers: boostRoster })
  }

  setupRace = () => {
    if (this.state.racers.length === 0) {
      this.setState({ raceMessage: "Add Contestants!" })
      return
    }
    this.setState({ raceMessage: "The race has started!!" })
    this.setState({ raceStart: true });
    this.startRace();
  }

  speedBoostCheck = (currentRacer) => {
    if ((currentRacer.speedboost === true) && (currentRacer.currentPlace < 6)) {
      return true;
    }
    return false;
  }

  startRace = () => {
    let numRacers = this.state.racers.length
    let randomIndex = Math.floor((Math.random() * numRacers));
    let racerUpdate = this.state.racers;     
    racerUpdate[randomIndex].currentPlace++;
    this.speedBoostCheck(racerUpdate[randomIndex]) && racerUpdate[randomIndex].currentPlace ++;
    let round = this.state.currentRound;
    round++;
    this.setState({ currentRound : round })
    this.setState({ racers : racerUpdate });
    if ((racerUpdate[randomIndex].currentPlace >= this.state.finishPlace)) {
      this.winner(racerUpdate, randomIndex)
    }
    setTimeout(() => {
      !this.state.winCondition && this.startRace()
    }, this.state.raceSpeed)
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
    this.setState({ raceStart: false })
    this.setState({ racers: refreshRacers })
  }

  winner = (racerUpdate, randomIndex) => {
    this.whosWinning();
    setTimeout(() => {
      this.setState({ winCondition: true });
    }, 600)
    let message = racerUpdate[randomIndex].name + " is the winner!!";
    this.setState({ raceMessage: message });
  }

  renderWinners = (racer, index) => {
    return (
      <p key="-1">
        {index === 0 && "1st place: "}
        {index === 1 && "2nd place: "}
        {index === 2 && "3rd place: "}
        {index >= 3 && `${index + 1}th place: `}
        {racer.name}
      </p>
    )
  }

  whosWinning = () => {
    let lastRacerRoster = [];
    this.state.racers.forEach(racer => 
        lastRacerRoster.push(racer)
    );
    const sortedRacers = lastRacerRoster.sort((a, b) => {
      return b.currentPlace - a.currentPlace
    }).map((racer, index) => {
      return (
        this.renderWinners(racer, index)
      );
    });
    this.setState({ lastRacers : sortedRacers })
  }

  setSpeed = (speed) => {
    this.setState({ raceSpeed : speed })
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
      let racePosition = `racer place${racer.currentPlace}`
      return (
        <div key={racer.id} className={racePosition}>
          <DeleteBtn onClick={() => this.deleteRacer(racer.id)}>
            🗡
          </DeleteBtn>
          <CarrotBtn onClick={() => this.boostRacer(racer.id)}>
            <span role="img" aria-label="carrot">🥕</span>
          </CarrotBtn>
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
          {!this.state.raceStart && 
            <div id="speed_and_start_buttons">
              <SpeedSettings>
                <Tooltip title="Slow Speed" arrow>
                <Button
                  id="slowSpeed"
                  variant="contained"
                  color="primary"
                  onClick={() => this.setSpeed(680)}
                >
                  Slow
                </Button>
                </Tooltip>
                <Tooltip title="Normal Speed" arrow>
                <Button
                  id="normSpeed"
                  variant="contained"
                  color="primary"
                  onClick={() => this.setSpeed(420)}
                >
                  Norm
                </Button>
                </Tooltip>
                <Tooltip title="Fast Speed" arrow>
                <Button
                  id="fastSpeed"
                  variant="contained"
                  color="primary"
                  onClick={() => this.setSpeed(180)}
                >
                  Fast
                </Button>
                </Tooltip>
              </SpeedSettings>
              <Tooltip title="Start the Race!" arrow>
                <Button
                  id="start_btn"
                  variant="contained"
                  color="primary"
                  onClick={() => this.setupRace()}
                >
                  Start
                </Button>
              </Tooltip>
            </div>
          }
        </Header>
        {this.state.lastRacers.length > 0 && (
          <Body>
            <RaceMessage>{this.state.raceMessage}</RaceMessage>
          </Body>
        )}
        {this.state.racers.length > 0 && (
          <RaceTrack>{displayRacers}</RaceTrack>
        )}
        {this.state.winCondition === true && (
          <RaceStats>
            {this.state.lastRacers}
            <Button
              id="rerace_btn"
              variant="contained"
              color="primary"
              onClick={() => this.reRace()}>
              Reset Race!
            </Button>
          </RaceStats>
        )}
      </GameBoard>
    );

  }
}

export default App;

const GameBoard = styled.div`
  padding-top: 2%;
  color: white;
  height: 1000px;
`

const TitleAndRules = styled.div`
  padding-left: 4%;
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
  margin: 2% auto;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

const Rules = styled.ul`
  list-style-type: none;
  font-size: 1.5em;
`

const SpeedSettings = styled.div`
  margin-left: 16px;
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
  position: absolute;
  padding: 18% 25%;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  font-size: 32px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const RaceTrack = styled.div`
  background-image: url(${racetrack});
  background-size: 100% 100px;
  background-repeat: repeat-y;
  padding: 2px 2%;
`;

const DeleteBtn = styled.button`
  position: absolute;
  left: 18px;
  font-size: 30px;
  background: transparent;
  outline: none;
  border: none;
  &:hover {
    font-size: 40px;
    outline: none;
  }
`

const CarrotBtn = styled.button`
  position: absolute;
  left: 42px;
  font-size: 30px;
  background: transparent;
  border: none;
  &:hover {
    font-size: 40px;
  }
  &:active {
    border: 1px solid orange;
  }
`