import * as types from '../constants/ActionTypes'
import uuid from 'node-uuid'

export function addNote(text) {
  return {
		type: types.ADD_NOTE,
		note: {
			id: uuid.v4(),
			task : text
		}
	};
}

export function deleteNote(id) {
	return { type: types.DELETE_NOTE, id }
}

export function editNote(id, text) {
	return { type: types.EDIT_NOTE, id, text }
}