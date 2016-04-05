import React from 'react';
import { bindActionCreators } from 'redux'
import Notes from './Notes.jsx';
import { connect } from 'react-redux'
import * as Actions from '../actions'


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const notes = this.props.notes

		return (
			<div>
				<button className="add-note" onClick={this.addNote.bind(this)}>+</button>
				<Notes notes={notes} 
						onEdit={this.editNote.bind(this)}
						onDelete={this.deleteNote.bind(this)} />
			</div>
		);
	}

	deleteNote(id) {
		this.props.notesActions.deleteNote(id);
	}

	editNote(id, task) {
		this.props.notesActions.editNote(id, task)
		console.log('got ' + id + ' with ' + task);
	}

	addNote() {
		console.log('asked to create note');
		this.props.notesActions.addNote('Newly Added task');
	}
}

App.propTypes = {
	notes: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		notes: state.notes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		notesActions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
