import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddPlayerForm extends Component {
	
	static propTypes = {
		addPlayer: PropTypes.func
	}

	// state = {
	// 	value: ''
	// };

	playerInput = React.createRef();


	
	// handleValueChange = (e) => {
	// 	this.setState({ value: e.target.value })
	// }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.playerInput.current.value);
		e.currentTarget.reset();
		// this.setState({ value: '' })
	}

	render() {
				
		console.log(this.playerInput);
		// console.log(this.state.value);

		return (
			<form onSubmit={this.handleSubmit}>

				<input
					type="text"
					ref={this.playerInput}
					// value={ this.state.value }
					// onChange={ this.handleValueChange }
					placeholder="Enter a player's name"
				/>

				<input 
					type="submit"
					value="Add Player"
				/>

			</form>
		);
	}
}

export default AddPlayerForm;