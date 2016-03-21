import Note from './Note.jsx';
import React from 'react';

export default ({notes, onEdit, onDelete}) => {
	return (
		<ul className="notes">{notes.map(n =>
			<li className="note" key={n.id}>
				<Note task={n.task} onEdit={onEdit.bind(null, n.id)} onDelete={onDelete.bind(null, n.id)} />
			</li>
		)}</ul>
	);
}