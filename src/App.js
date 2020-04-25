import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentPlace: 0,
      raceStart: false,
      raceMessage: "",
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
        <Button variant="contained" color="primary" onClick={() => this.startFight()}>
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

  startFight = () => {
    this.setState({ raceStart : true });
    setTimeout(() => {
      console.log("Timeout time")
    }, 1000)
  }

  render () {
    const displayRacers = this.state.racers.map(racer => {
        return (
          <div key={racer.id}>
            <p>{racer.name}
                (currentPlace:{racer.currentPlace})
            </p>
          </div>
        )
    })

    return (
      <div className="App">
        <h1>Dubios Derby!</h1>
        {displayRacers}
        {this.state.raceStart ? <p>Race Started!</p> : this.inputRacers()}
      </div>
    );

  }
}

export default App;
