import * as types from '../constants/ActionTypes'

export function addNote(text) {
	return { type: types.ADD_NOTE, text }
}

export function deleteNote(id) {
	return { type: types.DELETE_NOTE, id }
}

export function editNote(id, text) {
	return { type: types.EDIT_NOTE, id, text }
}