import { DISTRIBUTE_WIN } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case DISTRIBUTE_WIN:
			return action.payload
		default:
			return state
	}
}
