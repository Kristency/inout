import { STOP_VOTING } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case STOP_VOTING:
			return action.payload
		default:
			return state
	}
}
