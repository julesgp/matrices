import React from 'react';

export default class AddData extends React.Component {
    render() {
        return (
        	<section className="container enteringData">
        		
        		<h2>Choose the size of the Matrices</h2>

        		<h4>Enter number of rows:</h4>
        		<div className="rowsNum">
        			<button id="r1" className={this.props.selectionR[0]} onClick={this.props.selectedSize}> 1
        			</button>
        			<button id="r2" className={this.props.selectionR[1]} onClick={this.props.selectedSize}> 2
        			</button>
        			<button id="r3" className={this.props.selectionR[2]} onClick={this.props.selectedSize}> 3
        			</button>
        			<button id="r4" className={this.props.selectionR[3]} onClick={this.props.selectedSize}> 4
        			</button>
        		</div>

        		<h4>Enter number of columns:</h4>
        		<div className="columnNum">
        			<button id="c1" className={this.props.selectionC[0]} onClick={this.props.selectedSize}>1</button>
        			<button id="c2" className={this.props.selectionC[1]} onClick={this.props.selectedSize}>2</button>
        			<button id="c3" className={this.props.selectionC[2]} onClick={this.props.selectedSize}>3</button>
        			<button id="c4" className={this.props.selectionC[3]} onClick={this.props.selectedSize}>4</button>
        		</div>

        		<div className="container">
        			<button className="btn-primary" onClick={this.props.backButton}>Back</button>
                    <button className="btn-primary" onClick={this.props.nextStep}>Next</button>
        		</div>
        	</section>
        )
    }
}