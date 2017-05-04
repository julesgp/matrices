import React from 'react';

export default class Operation extends React.Component {
    render() {
        return (
        	<section className="container operation">
        		<h4>Select number of Matrices for {this.props.typeOfOperation}</h4>
                <div className="choosingMatrices">
                    <button className={this.props.typeOfClass[0]} id="2" onClick={this.props.selectMatrixNum}>2</button>
                    <button className={this.props.typeOfClass[1]} id="3" onClick={this.props.selectMatrixNum}>3</button>
                    <button className={this.props.typeOfClass[2]} id="4" onClick={this.props.selectMatrixNum}>4</button>
                </div>
        		<div className="container">
        			<button className="btn-primary" onClick={this.props.goBack}>Back</button>
                    <button className="btn-primary" onClick={this.props.dataEntry}>Next</button>
        		</div>
        	</section>
        )
    }
}