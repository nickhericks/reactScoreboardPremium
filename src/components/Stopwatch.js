import React, {Component} from 'react';

class Stopwatch extends Component {

	state = {
		isRunning: false,
		elapsedTime: 0,
		previousTime: 0
	};

	componentDidMount() {
		console.log('stopwatch mounted')
		this.intervalID = setInterval(() => this.tick(), 100)
	}

	tick = () => {
		// console.log('ticking...')
		if (this.state.isRunning) {
			const now = Date.now();
			this.setState( prevState => ({
				previousTime: now,
				elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
			}));
		}
	}

	handleStopwatch = () => {
		this.setState( prevState => ({
			isRunning: !prevState.isRunning
		}));
		if (!this.state.isRunning) {
			console.log('starting');
			this.setState({
				previousTime: Date.now()
			});
		}
	}

	render() {

		const seconds = Math.floor(this.state.elapsedTime / 1000);

		return(
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<span className="stopwatch-time">
					{seconds}
				</span>

				<button onClick={this.handleStopwatch}>
					{ this.state.isRunning ? 'Stop' : 'Start' }
				</button>


				<button>Reset</button>


			</div>
		);
	}
}






export default Stopwatch;