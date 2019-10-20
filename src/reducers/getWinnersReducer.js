import { GET_WINNERS } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case GET_WINNERS:
			return action.payload
		default:
			return state
	}
}
