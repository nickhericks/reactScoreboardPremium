import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends PureComponent {

	static propTypes = {
		changeScore: PropTypes.func,
		removePlayer: PropTypes.func,
		name: PropTypes.string,
		score: PropTypes.number,
		id: PropTypes.number,
		index: PropTypes.number
	}

	render() {

		const {
			name, 
			score,
			id,
			index,
			removePlayer,
			changeScore
		} = this.props;
		
		console.log(name + " player: rendered");
		
		return (
			<div className="player">
				<span className="player-name">
					<button
						className="remove-player"
						onClick={() => removePlayer(id)}
					>
						✖
					</button>
					{name}
				</span>

				<Counter
					score={score}
					index={index}
					changeScore={changeScore}
				/>
			</div>
		);
	}
};

export default Player;