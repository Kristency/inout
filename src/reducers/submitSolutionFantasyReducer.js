import { SUBMIT_SOLUTION_FANTASY } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SUBMIT_SOLUTION_FANTASY:
			return action.payload
		default:
			return state
	}
}
