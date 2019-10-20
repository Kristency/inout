import { SUBMIT_SOLUTION } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SUBMIT_SOLUTION:
			return action.payload
		default:
			return state
	}
}
