import uuid from 'node-uuid';
import React from 'react';

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
			test
				<ul>
					{notes.map(n =><li key={n.id}>{n.task}</li>)}
				</ul>
			</div>
		);
	}
}