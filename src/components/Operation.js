import React from 'react';

export default class Operation extends React.Component {
    render() {
        return (
        	<section className="container operation">
        		<h4>Which operation would you like to perform?</h4>
        		<div className="container">
        			<button className="btn-primary" id="addition" onClick={this.props.operationChosen}>
        				Addition
        			</button>
        			<button className="btn-primary" id="substraction" onClick={this.props.operationChosen}>
        				Substraction
        			</button>
        			<button className="btn-primary" id="multiplication" onClick={this.props.operationChosen}>
        				Multiplication
        			</button>
        			<button className="btn-primary" id="division" onClick={this.props.operationChosen}>
        				Division
        			</button>
        		</div>
        	</section>
        )
    }
}