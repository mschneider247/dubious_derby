import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      speed: 0,
      startPlace: 0,
      raceStart: false,
      racers: []
    }
  }

  inputAttribute = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputBtn = () => {
    let newRacer = {
      id: Date.now(),
      name: this.state.name,
      speed: this.state.speed,
      startPlace: this.state.startPlace
    }
    let newRacers = this.state.racers;
    newRacers.push(newRacer);
    this.setState({ racers : newRacers })
  }

  startFight = () => {
    console.log("OOOOllly fuck!")
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
        return (
          <div>
            <p>{racer.name}
                (Speed:{racer.speed})
                (StartPlace:{racer.startPlace})
            </p>
          </div>
        )
    })

    return (
      <div className="App">
        <h1>Dubios Derby!</h1>
        {displayRacers}
        <p>NAME:</p>
        <input placeholder="Contestant Name" name="name" type="text" onChange={(e) => this.inputAttribute(e)} />
        <p>Speed:</p>
        <input placeholder="Speed" name="speed" type="number" onChange={(e) => this.inputAttribute(e)} />
        <br></br>
        <Button variant="contained" color="primary" onClick={()=> this.inputBtn()}>
          Add Racer!   
        </Button>
        <Button variant="contained" color="primary" onClick={()=> this.startFight()}>
          Start Race!   
        </Button>
      </div>
    );

  }
}

export default App;
