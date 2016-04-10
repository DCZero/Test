import React from 'react';
import Notes from './Notes.jsx'
import * as LaneActions from '../actions/lanes'
import * as NoteActions from '../actions/notes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Lane extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const lane = this.props.laneNotes;

		return (
			<div >
				<div className="lane-header">
					<div className="lane-add-note">
						<button className="add-note" onClick={this.addNote.bind(this)}>+</button>
					</div>
					<div className="lane-name">{lane.name}</div>
					<Notes notes={this.props.laneNotes} 
							onEdit={this.editNote.bind(this)}
							onDelete={this.deleteNote.bind(this)}/>
				</div>
			</div>
		);
	}

	deleteNote(id) {
		this.props.noteActions.deleteNote(id);
	}

	editNote(id, task) {
		if (!task.trim()) {
			return;
		}

		this.props.noteActions.editNote(id, task)
	}

	addNote() {
		this.props.noteActions.addNote('New Task');
	}
}

function mapStateToProps(state, props) {
	return {
		laneNotes: state.notes//.map(id => state.notes[
				//state.notes.findIndex(note => note.id === id)
				//]).filter(note => note)
		}
}

function mapDispatchToProps(dispatch) {
	return {
		laneActions: bindActionCreators(LaneActions, dispatch),
		noteActions: bindActionCreators(NoteActions, dispatch)
	}
}

export default connect(mapStateToProps,	mapDispatchToProps
)(Lane);