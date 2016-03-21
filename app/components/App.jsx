import uuid from 'node-uuid';
import React from 'react';

import Notes from './Notes.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
			{
				id:uuid.v4(),
				task: 'a task'
			},
			{
				id:uuid.v4(),
				task: 'another task'
			},
			{
				id:uuid.v4(),
				task: 'a third task'
			}
			]
		};
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

	deleteNote(id) {
		if (!id.trim){
			return;
		}

		
		this.setState({
			notes: this.state.notes.filter(n => n.id !== id)
		});
	}

	editNote(id, task) {
		// if empty..
		if (!task.trim)
		{
			return;
		}

		const notes = this.state.notes.map(note => {
			if(note.id === id && task)
			{
				note.task = task;
			}

			return note;
		});

		this.setState({notes});
	}

	addNote() {
		this.setState({
			// ... is the spread operator
			notes: [...this.state.notes, {
				id: uuid.v4(),
				task: 'a new task'
			}]
		});
	}
}