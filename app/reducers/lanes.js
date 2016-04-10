import { CREATE_LANE, ADD_TO_LANE, REMOVE_FROM_LANE } from '../constants/ActionTypes';
import uuid from 'node-uuid';

const initialState = [];

export default function lanes(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_LANE:
			return state.map((l) => {
				const index = l.notes.indexOf(action.noteId);

				if (index >= 0) {
					return Object.assign({}, l, {
						notes: l.notes.length > 1 ? l.notes.slice(0, index).
							concat(l.notes.slice(index + 1)
						): []
					});
				}
				if (l.id === action.laneId) {
					return Object.assign({}, l, {
						notes: [...l.notes, action.noteId]
					});
				}

				return l;
			});
		case REMOVE_FROM_LANE:
			return state.map((l) => {
				if (l.id === action.laneId) {
					const index = l.notes.indexOf(action.noteId);

					if (index >= 0) {
						return Object.assign({}, l, {
							notes: l.notes.filter(n => n.id != action.nodeId)
							): []
						});
					}
				}

				return l;
			});
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