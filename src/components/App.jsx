import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { submitSolution, distributeWin, stopVoting, getWinners } from '../actions'
import Table from './Table'

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
			return (
				<div class="alert alert-primary alert-dismissible fade show" role="alert">
					Transaction initiated...{' '}
					<a href={this.props.submitSolutionRes} class="alert-link">
						view here
					</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)
		}
	}

	renderDistributeWinRes() {
		if (this.props.distributeWinRes) {
			return (
				<div class="alert alert-warning alert-dismissible fade show" role="alert">
					Transaction initiated...{' '}
					<a href={this.props.distributeWinRes} class="alert-link">
						view here
					</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)
		}
	}

	renderStopVotingRes() {
		if (this.props.stopVotingRes) {
			return (
				<div class="alert alert-danger alert-dismissible fade show" role="alert">
					Transaction initiated...{' '}
					<a href={this.props.stopVotingRes} class="alert-link">
						view here
					</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)
		}
	}

	renderWinnerList() {
		return this.props.getWinnersRes.map(winner => {
			return <li>{winner}</li>
		})
	}

	renderGetWinnersRes() {
		if (this.props.getWinnersRes) {
			return (
				<div class="alert alert-success alert-dismissible fade show" role="alert">
					<br />
					{this.renderWinnerList()}
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)
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
			<Fragment>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<a class="navbar-brand" href="#">
						<img
							src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Sports-Golf-icon.png"
							width="30"
							height="30"
							alt=""
						/>
						Dashboard
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Transactions
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Network
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">
										Matic
									</a>
									<a class="dropdown-item" href="#">
										Rinkeby
									</a>
									<a class="dropdown-item" href="#">
										Kovan
									</a>
								</div>
							</li>
						</ul>
						<form class="form-inline my-2 my-lg-0">
							<input
								class="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
				<div className="row justify-content-center mx-0 mt-5">
					<div className="col-10 col-md-5">
						<section>
							<form onSubmit={this.handleSubmitSolutionSubmit}>
								<div className="form-group">
									<div class="input-group my-4">
										<input
											type="text"
											class="form-control"
											value={this.state.submitSolutionQid}
											onChange={this.handleSubmitSolQidChange}
											placeholder="Enter question id"
											required
										/>
										<input
											type="text"
											class="form-control"
											value={this.state.submitSolutionAnsid}
											onChange={this.handleSubmitSolAnsidChange}
											placeholder="Enter answer id"
											required
										/>
										<div class="input-group-append">
											<button class="btn btn-outline-primary" type="submit">
												Submit Solution
											</button>
										</div>
									</div>
								</div>
							</form>
							{this.renderSubmitSolRes()}
						</section>

						<section>
							<form onSubmit={this.handleDistributeWinSubmit}>
								<div className="form-group">
									<div class="input-group my-4">
										<input
											type="text"
											class="form-control"
											value={this.state.distributeWinQid}
											onChange={this.handleDistributeWinQidChange}
											placeholder="Enter question id"
											required
										/>
										<div class="input-group-append">
											<button class="btn btn-outline-warning" type="submit">
												Distribute Win
											</button>
										</div>
									</div>
								</div>
							</form>
							{this.renderDistributeWinRes()}
						</section>

						<section>
							<form onSubmit={this.handleStopVotingSubmit}>
								<div className="form-group">
									<div class="input-group my-4">
										<input
											type="text"
											class="form-control"
											value={this.state.stopVotingQid}
											onChange={this.handleStopVotingQidChange}
											placeholder="Enter question id"
											required
										/>
										<div class="input-group-append">
											<button class="btn btn-outline-danger" type="submit">
												Stop Voting
											</button>
										</div>
									</div>
								</div>
							</form>
							{this.renderStopVotingRes()}
						</section>

						<section>
							<form onSubmit={this.handleGetWinnersSubmit}>
								<div className="form-group">
									<div class="input-group my-4">
										<input
											type="text"
											class="form-control"
											value={this.state.getWinnersQid}
											onChange={this.handleGetWinnersQidChange}
											placeholder="Enter question id"
											required
										/>
										<div class="input-group-append">
											<button class="btn btn-outline-dark" type="submit">
												Get Winners
											</button>
										</div>
									</div>
								</div>
							</form>
							{this.renderGetWinnersRes()}
						</section>
					</div>
					{/* <div className="col-md-2"></div> */}
					<div className="col-10 col-md-5">
						<Table />
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	const {
		submitSolutionRes,
		distributeWinRes,
		stopVotingRes,
		getWinnersRes,
		submitSolutionFantasyRes,
		addFantasyRes
	} = state
	return {
		submitSolutionRes,
		distributeWinRes,
		stopVotingRes,
		getWinnersRes,
		submitSolutionFantasyRes,
		addFantasyRes
	}
}

export default connect(
	mapStateToProps,
	{ submitSolution, distributeWin, stopVoting, getWinners }
)(App)
