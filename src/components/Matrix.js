import React from 'react';
import Column from './Columns.js';

export default class Matrix extends React.Component {
    render(){
        var list = [];
        for(var i=0; i<this.props.rowsNum;i++){
            list.push(<li key={"row"+i} className="displayRow"><Column numberOfColumns={this.props.columsChosen}/></li>);
        }
        return (
        	<section>
                <ul className="rowStructure">
                {list}
                </ul>	
        	</section>
        )
    }
}