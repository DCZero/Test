import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = NoteStore.getState();
	}

	render() {
		const notes = this.state.notes;
		return (
			<div>
				<button className="add-note" onClick={this.addNote.bind(this)}>+</button>
				<Notes notes={notes} 
						onEdit={this.editNote.bind(this)}
						onDelete={this.deleteNote.bind(this)} />
			</div>
		);
	}

	componentDidMount() {
		NoteStore.listen(this.storeChanged.bind(this));
	}

	componentWillUnmount() {
		NoteStore.unlisten(this.storeChanged.bind(this));
	}

	storeChanged(state) {
		this.setState(state);
	}

	deleteNote(id) {
		NoteActions.delete(id);
	}

	editNote(id, task) {
		// Don't modify if trying set an empty value
		if(!task.trim()) {
			return;
		}

		NoteActions.update({id, task});
	}

	addNote() {
		NoteActions.create({task: 'new task'});
	}
}