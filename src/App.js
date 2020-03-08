import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import Bar from '@material-ui/core/Bar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      health: 0,
      attack: 0,
      defense: 0,
      fighters: []
    }
  }

  inputAttribute = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputBtn = () => {
    let newFighter = {
      id: Date.now(),
      name: this.state.name,
      health: this.state.health,
      attack: this.state.attack,
      defense: this.state.defense,
    }
    let newFighters = this.state.fighters;
    newFighters.push(newFighter);
    this.setState({ fighters : newFighters })
  }

  render () {
    const displayFighters = this.state.fighters.map(fighter => {
        return (
          <div>
            <p>{fighter.name}</p>
            <p>{fighter.health}</p>
            <p>{fighter.attack}</p>
            <p>{fighter.defense}</p>
          </div>
        )
    })

    return (
      <div className="App">
        <Bar>Dubios Derby!</Bar>
        {displayFighters}
        <p>NAME:</p>
        <input placeholder="Contestanct Name" name="name" type="text" onChange={(e) => this.inputAttribute(e)} />
        <p>Health:</p>
        <input placeholder="Health" name="health" type="number" onChange={(e) => this.inputAttribute(e)} />
        <p>Attack:</p>
        <input placeholder="Attack" name="attack" type="number" onChange={(e) => this.inputAttribute(e)} />
        <p>Defense:</p>
        <input placeholder="Defense" name="defense" type="number" onChange={(e) => this.inputAttribute(e)} />
        <br></br>
        <Button variant="contained" color="primary" onClick={()=> this.inputBtn()}>
          Add Fighter!   
        </Button>
      </div>
    );

  }
}

export default App;
