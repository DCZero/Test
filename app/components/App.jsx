import React from 'react';
import { bindActionCreators } from 'redux'
import Lanes from './Lanes.jsx';
import { connect } from 'react-redux'
import * as Actions from '../actions/lanes'


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button className="add-lane" onClick={this.addLane.bind(this)}>+</button>
				<Lanes lanes={this.props.lanes} />
			</div>
		);
	}

	addLane() {
		console.log('Adding Lane');
		this.props.lanesActions.create({name: 'new lane'});
	}
}

App.propTypes = {
	lanes: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		lanes: state.lanes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		lanesActions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)