import React from 'react';

export default class NoMatrixError extends React.Component {
    render() {
        return (
        	<section className="container errorOne">
        		<h3>Please pick the number of matrices to work with</h3>
        		<button className="btn-primary" onClick={this.props.goBackMatricesNum}>Go Back</button>
        	</section>
        )
    }
}