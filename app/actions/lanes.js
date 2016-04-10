import * as types from '../constants/ActionTypes'

export function create(lane) {
	console.log('Building Action to create Lane');
	return { type: types.CREATE_LANE, lane }
}