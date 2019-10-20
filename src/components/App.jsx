import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitSolution, distributeWin, stopVoting, getWinners } from '../actions'

class App extends Component {
	state = {
		submitSolutionQid: '',
		submitSolutionAnsid: '',
		distributeWinQid: '',
		stopVotingQid: '',
		getWinnersQid: ''
	}

	// render response
	renderSubmitSolRes() {
		if (this.props.submitSolutionRes) {
			return <div>{this.props.submitSolutionRes}</div>
		}
	}

	renderDistributeWinRes() {
		if (this.props.distributeWinRes) {
			return (
				<div>
					Transaction Initiated... <a href={this.props.distributeWinRes}>view here</a>
				</div>
			)
		}
	}

	renderStopVotingRes() {
		if (this.props.stopVotingRes) {
			return <div>{this.props.stopVotingRes}</div>
		}
	}

	renderGetWinnersRes() {
		if (this.props.getWinnersRes) {
			return <div>{this.props.getWinnersRes}</div>
		}
	}

	// handle on change
	handleSubmitSolQidChange = event => {
		this.setState({ submitSolutionQid: event.target.value })
	}

	handleSubmitSolAnsidChange = event => {
		this.setState({ submitSolutionAnsid: event.target.value })
	}

	handleDistributeWinQidChange = event => {
		this.setState({ distributeWinQid: event.target.value })
	}

	handleStopVotingQidChange = event => {
		this.setState({ stopVotingQid: event.target.value })
	}

	handleGetWinnersQidChange = event => {
		this.setState({ getWinnersQid: event.target.value })
	}

	// handle on submit
	handleSubmitSolutionSubmit = event => {
		event.preventDefault()
		this.props.submitSolution(this.state.submitSolutionQid, this.state.submitSolutionAnsid)
	}

	handleDistributeWinSubmit = event => {
		event.preventDefault()
		this.props.distributeWin(this.state.distributeWinQid)
	}

	handleStopVotingSubmit = event => {
		event.preventDefault()
		this.props.stopVoting(this.state.stopVotingQid)
	}

	handleGetWinnersSubmit = event => {
		event.preventDefault()
		this.props.getWinners(this.state.getWinnersQid)
	}

	render() {
		return (
			<div>
				<section>
					<form onSubmit={this.handleSubmitSolutionSubmit}>
						<input
							type="text"
							value={this.state.submitSolutionQid}
							onChange={this.handleSubmitSolQidChange}
							required
						/>
						<input
							type="text"
							value={this.state.submitSolutionAnsid}
							onChange={this.handleSubmitSolAnsidChange}
							required
						/>
						<button type="submit">Submit Solution</button>
					</form>
					{this.renderSubmitSolRes()}
				</section>

				<section>
					<form onSubmit={this.handleDistributeWinSubmit}>
						<input
							type="text"
							value={this.state.distributeWinQid}
							onChange={this.handleDistributeWinQidChange}
							required
						/>
						<button type="submit">Distribute Win</button>
					</form>
					{this.renderDistributeWinRes()}
				</section>

				<section>
					<form onSubmit={this.handleStopVotingSubmit}>
						<input
							type="text"
							value={this.state.stopVotingQid}
							onChange={this.handleStopVotingQidChange}
							required
						/>
						<button type="submit">Stop Voting</button>
					</form>
					{this.renderStopVotingRes()}
				</section>

				<section>
					<form onSubmit={this.handleGetWinnersSubmit}>
						<input
							type="text"
							value={this.state.getWinnersQid}
							onChange={this.handleGetWinnersQidChange}
							required
						/>
						<button type="submit">Get Winners</button>
					</form>
					{this.renderGetWinnersRes()}
				</section>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { submitSolutionRes, distributeWinRes, stopVotingRes, getWinnersRes } = state
	return {
		submitSolutionRes,
		distributeWinRes,
		stopVotingRes,
		getWinnersRes
	}
}

export default connect(
	mapStateToProps,
	{ submitSolution, distributeWin, stopVoting, getWinners }
)(App)
