import { CREATE_LANE } from '../constants/ActionTypes';
import uuid from 'node-uuid';

const initialState = [];

export default function lanes(state = initialState, action) {
	switch (action.type) {
		case CREATE_LANE:
			return [
				{
					id: uuid.v4(),
					name: action.name,
					notes: []
				},
				...state
			]
		default:
			return state
	}
}