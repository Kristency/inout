import {
	SUBMIT_SOLUTION,
	DISTRIBUTE_WIN,
	STOP_VOTING,
	GET_WINNERS,
	ADD_BALANCE,
	public_key,
	private_key
} from './types'
import despo from '../apis/despo'

export const submitSolution = (qid, ansid) => {
	return async dispatch => {
		const response = await despo.get(`/submitsolution/${qid}/${ansid}/${public_key}/${private_key}`)
		console.log(response)
		dispatch({
			type: SUBMIT_SOLUTION,
			payload: response.data
		})
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
	return async dispatch => {
		const response = await despo.get(`/stopvoting/${qid}/${public_key}/${private_key}`)
		dispatch({
			type: STOP_VOTING,
			payload: response.data
		})
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
