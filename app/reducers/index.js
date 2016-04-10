import { combineReducers } from 'redux'
import notes from './notes'
import lanes from './lanes'

const rootReducer = combineReducers({
	notes,
	lanes
})

export default rootReducer