import { ADD_FANTASY_TEAM } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case ADD_FANTASY_TEAM:
			return action.payload
		default:
			return state
	}
}
