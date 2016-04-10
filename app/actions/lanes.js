import * as types from '../constants/ActionTypes'

export function create(lane) {
	console.log('Building Action to create Lane');
	return { type: types.CREATE_LANE, lane }
}

export function addToLane(laneId, noteId) {
	console.log('adding task to ' + laneId + ' TASKID: ' + noteId);
	return { type: types.ADD_TO_LANE, laneId, noteId }
}

export function removeFromLane(laneId, noteId) {
	console.log('removing task from ' + laneId + ' TASKID: ' + noteId);
	return { type: types.REMOVE_FROM_LANE, laneId, noteId }
}