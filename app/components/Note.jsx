import React from 'react';

export default class Note extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			editing: false
		};
	}

	render() {
		if (this.state.editing)
		{
			return this.renderEdit();
		}

		return this.renderNote();
	}

	renderNote() {
		const onDelete = this.props.onDelete;

		return (
				<div>
					{onDelete ? this.renderDelete() : null }
					<span className="task" onClick={this.edit.bind(this)}> {this.props.task}</span>
				</div>
				);
	}

	renderDelete() {
		return <button className="delete-note" onClick={this.props.onDelete}>x</button> 
	}

	edit() {
		this.setState({editing: true});
	}

	renderEdit() {
		return <input 
					type="text"
					ref={(e) => e ? e.selectionStart = this.props.task.length : null }
					autoFocus={true}
					defaultValue={this.props.task}
					onBlur={this.finishEdit.bind(this)}
					onKeyPress={this.checkEnter.bind(this)} />;
	}

	checkEnter(e) {
		if (e.which === 13){
			this.finishEdit(e);
		}
	}

	finishEdit(e) {
		const value = e.target.value;

		if(this.props.onEdit) {
			this.props.onEdit(value);
		}
		
		this.setState({editing: false});
	}
}