import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../constants/ActionTypes'
import uuid from 'node-uuid'

const initialState = [
	{
		task: 'Use Redux',
		id: uuid.v4()
	}
]

export default function notes(state = initialState, action) {
	switch (action.type) {
		case ADD_NOTE:
			return [
				{
					id: uuid.v4(),
					task: action.text
				},
				...state
			]
		case DELETE_NOTE:
			return state.filter(n => n.id !== action.id)
		case EDIT_NOTE:
			return state.map(n => 
				n.id == action.id ?
					Object.assign({}, n, { text: action.text }) : n)
		default:
			return state
	}
}