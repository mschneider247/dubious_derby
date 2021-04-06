import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css'
import { Button, Typography, Tooltip, ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';
import racetrack from '../../images/racetrack.jpg'

console.log("is this love?", process.env.REACT_APP_TORTILLA_SAUCE);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentRound: 0,
      currentPlace: 0,
      finishPlace: 13,
      raceStart: false,
      raceMessage: "Welcome! Add Contestants, then hit start!",
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
          <Button id="input_btn" variant="contained" color="primary" onClick={() => this.inputBtn()}>
            +
          </Button>
        </Tooltip>
      </InputRacers>
    )
  }

  inputBtn = () => {
    let name = this.refactorName(this.state.name);
    if (name !== '') { 
      let message = `${name} has been added to the race!`
      this.setState({ raceMessage: message})
      let newRacer = {
        id: Date.now(),
        name: name,
        currentPlace: this.state.currentPlace,
        speedboost: false,
        icon: this.state.icons[Math.floor(Math.random() * this.state.icons.length)],
      }
      let newRacers = this.state.racers;
      newRacers.push(newRacer);
      this.setState({ racers : newRacers });
      this.setState({ name: "" });
    } else {
      this.setState({ raceMessage: "Please enter a name!"})
    }
  }

  refactorName = (name) => {
    let characters = name.split('')
    let newName = ''
    if (characters.length) {
      characters.forEach((character, index) => {
        if ((index > 17) || (character === '?')) {
          return
        }
        if (!index) {
          newName += character.toUpperCase()
        } else {
          newName += character
        }
      })
    }
    return newName;
  }

  deleteRacer = (id) => {
    let smallerRoster = this.state.racers
    smallerRoster.forEach((racer, i) => {
      if (racer.id === id) {
        if (!racer.icon) {
          smallerRoster.splice(i, 1);
          let message = 'Fresh jerky at the food court!';
          this.setState({ raceMessage : message })
        } else {
          let message = racer.name + ' just lost their head!';
          this.setState({ raceMessage: message });
          racer.icon = '';
          racer.name = '';
        }
      }
    })
    this.setState({ racers : smallerRoster })
  }

  boostRacer = (id) => {
    let boostRoster = this.state.racers
    boostRoster.forEach((racer, i) => {
      if (racer.id === id) {
        racer.speedboost = true;
        let message = '';
        if (racer.name) {
          message += racer.name
        } else {
          message += 'A headless donkey'
        }
        message += ' has been BOOSTED!';
        this.setState({ raceMessage : message});
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
    if ((currentRacer.speedboost === true) && (currentRacer.currentPlace < 9)) {
      return true;
    }
    return false;
  }

  startRace = () => {
    let numRacers = this.state.racers.length
    let randomIndex = Math.floor((Math.random() * numRacers));
    let racerUpdate = this.state.racers;     
    racerUpdate[randomIndex].name && racerUpdate[randomIndex].currentPlace++;
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
    }, racerUpdate[randomIndex].name ? this.state.raceSpeed : 0)
  }

  reRace = () => {
    let refreshRacers = this.state.racers.map(racer => {
      let resetRacer = {}
      resetRacer.id = racer.id;
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
      <p key={index}>
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
    })
    const winnerRole = []
    sortedRacers.forEach(racer => {
      if (racer.name) {
        winnerRole.push(racer)
      }
    })
    const displayedWinners = winnerRole.map((racer, index) => {
      return (
        this.renderWinners(racer, index)
      );
    });
    this.setState({ lastRacers : displayedWinners })
  }

  setSpeed = (speed) => {
    this.setState({ raceSpeed : speed })
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
      let racePosition = `racer place${racer.currentPlace}`
      return (
        <div key={racer.id} className={racePosition}>
          <Tooltip title="Stabby stab cut cut">
            <DeleteBtn onClick={() => this.deleteRacer(racer.id)}>
              🗡
            </DeleteBtn>
          </Tooltip>
          <Tooltip title="BOOST!" arrow>
            <CarrotBtn onClick={() => this.boostRacer(racer.id)}>
              <span role="img" aria-label="carrot">🥕</span>
            </CarrotBtn>
          </Tooltip>
          <Typography variant="h4">
            {racer.icon}
          </Typography>
          <br/>
          <NameBackground>
            <RacerName>
              {racer.name}
            </RacerName> 
          </NameBackground>
        </div>
      );
    });

    return (
      <GameBoard>
        <Header>
          {!this.state.raceStart &&
          <TitleAndRules>
            <Typography variant="h2">Dubious Derby</Typography> 
            {this.state.raceStart === false && this.inputRacers()}
          </TitleAndRules>
          }
          {!this.state.raceStart && 
            <div id="speed_and_start_buttons">
              <Tooltip title="Game Speed" arrow>
                <ButtonGroup size="large" color="primary" aria-label="speed buttons">
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
                </ButtonGroup> 
              </Tooltip>
              <Tooltip title="Start the Race!" arrow>
                <Button
                  id="start_btn"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => this.setupRace()}
                >
                  Start
                </Button>
              </Tooltip>
            </div>
          }
        </Header>
        <Body>
          <RaceMessage>{this.state.raceMessage}</RaceMessage>
        </Body>
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
  color: #E1F2FE;
`

const TitleAndRules = styled.div`
  padding-left: 4%;
  @media (max-width: 900px) {
    padding-left: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RaceMessage = styled.div`
  width: 700px;
  font-size: 30px;
  color: #ED9B40;
  margin: 2% auto;
  @media (max-width: 900px) {
    margin-left: 20px;
    font-size: 22px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
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

const NameBackground = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
`

const RacerName = styled.div`
  font-size: 28px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`

const RaceStats = styled.div`
  position: absolute;
  padding: 4% 5%;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  font-size: 32px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const RaceTrack = styled.div`
  background-image: url(${racetrack});
  background-size: 100% 400px;
  background-repeat: repeat-y;
  padding: 6px 30px;
  border-radius: 2px;
  @media (max-width: 700px) {
    padding: 4px 0px;
    margin-left: -30px;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  left: 18px;
  font-size: 30px;
  background: transparent;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    font-size: 35px;
    outline: none;
  }
  @media (max-width: 700px) {
    left: 0px;
    font-size: 18px;
  }
`

const CarrotBtn = styled.button`
  position: absolute;
  left: 42px;
  font-size: 30px;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    font-size: 35px;
  }
  @media (max-width: 700px) {
    left: 22px;
    font-size: 18px;
  }
`