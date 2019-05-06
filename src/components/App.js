import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
	};


	// Find high score and return it, otherwise return null
	getHighScore = () => {
		const scores = this.state.players.map(p => p.score);
		const highScore = Math.max(...scores);
		if (highScore) {
			return highScore;
		}
		return null;
	}

	
	// player id counter
	prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
		}));
	};
	

	handleAddPlayer = (name) => {
		console.log(...this.state.players);
		this.setState( prevState => {
			return {
				players: [
					// Use spread operator to add new player to end of existing list
					...prevState.players,
					{
						name,
						score: 0,
						id: this.prevPlayerId += 1
					}
				]
			}
		});
	}


  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };


  render() {

		// Represents current high score
		const highScore = this.getHighScore();


    return (
      <div className="scoreboard">
        <Header
					title="Scoreboard" 
					players={ this.state.players }
				/>

        {/* Players list */}
        {this.state.players.map( (player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
						index={index}
						isHighScore={highScore === player.score} // equals a boolean depending on if a player's 'score' prop equal to the high score?
          />
        ))}

				<AddPlayerForm 
					addPlayer={this.handleAddPlayer}
				/>
      </div>
    );
  }
}

export default App;
