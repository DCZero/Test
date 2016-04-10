import React from 'react';
import Lane from './Lane.jsx';

export default class Lanes extends React.Component {
	render () {
		const lanes = this.props.lanes;
		return (
			<div className="lanes"> { lanes.map(l =>
				<Lane className="lane" key={ l.id } lane={ l } />
			)}</div>
		);
	}
}