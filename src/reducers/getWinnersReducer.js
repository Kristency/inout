import { GET_WINNERS } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case GET_WINNERS:
			let winners = []
			for (let winner of action.payload) {
				if (winner[2] === '0' && winner[3] === '0') {
					break
				}
				winners.push(winner)
			}
			return winners
		default:
			return state
	}
}
