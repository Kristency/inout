import {
	SUBMIT_SOLUTION,
	DISTRIBUTE_WIN,
	STOP_VOTING,
	GET_WINNERS,
	SUBMIT_SOLUTION_FANTASY,
	ADD_FANTASY_TEAM,
	ADD_BALANCE,
	public_key,
	private_key,
	url,
	pFee
} from './types'
import despo from '../apis/despo'

export const submitSolution = (qid, ansid) => {
	const response = despo.get(`/submitsolution/${qid}/${ansid}/${public_key}/${private_key}`)
	return {
		type: SUBMIT_SOLUTION,
		payload: url
	}
}

export const distributeWin = qid => {
	return async dispatch => {
		const response = await despo.get(`/distributewin/${qid}/${public_key}/${private_key}`)
		dispatch({
			type: DISTRIBUTE_WIN,
			payload: response.data
		})
	}
}

export const stopVoting = qid => {
	const response = despo.get(`/stopvoting/${qid}/${public_key}/${private_key}`)
	return {
		type: STOP_VOTING,
		payload: url
	}
}

export const getWinners = qid => {
	return async dispatch => {
		const response = await despo.get(`/getWinners/${qid}`)
		dispatch({
			type: GET_WINNERS,
			payload: response.data
		})
	}
}

export const submitSolutionFantasy = (qid, ansid) => {
	return async dispatch => {
		const response = await despo.get(
			`submitSolutionFantasy/${qid}/${ansid}/${public_key}/${private_key}`
		)
		dispatch({
			type: SUBMIT_SOLUTION_FANTASY,
			payload: response.data
		})
	}
}

export const addFantasy = (qid, players) => {
	return async dispatch => {
		const response = await despo.get(
			`submitSolutionFantasy/${qid}/${players}/${pFee}/${public_key}/${private_key}`
		)
		dispatch({
			type: ADD_FANTASY_TEAM,
			payload: response.data
		})
	}
}
