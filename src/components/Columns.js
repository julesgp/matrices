import React from 'react';

export default class Columns extends React.Component {
    render() {
    	var columnsToShow = [];
    	for(var i=0; i<this.props.numberOfColumns;i++){
    	    columnsToShow.push(<li key={"cols"+i}><input type="text" placeholder={"hello"+i}/></li>);
    	}
        return (
        	<div>
        		<ul className="inputFields">
        		{columnsToShow}
        		</ul>
        	</div>
        )
    }
}