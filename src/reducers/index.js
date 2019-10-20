import { combineReducers } from 'redux'

import submitSolutionReducer from './submitSolutionReducer'
import distributeWinReducer from './distributeWinReducer'
import stopVotingReducer from './stopVotingReducer'
import getWinnersReducer from './getWinnersReducer'

export default combineReducers({
	submitSolutionRes: submitSolutionReducer,
	distributeWinRes: distributeWinReducer,
	stopVotingRes: stopVotingReducer,
	getWinnersRes: getWinnersReducer
})
