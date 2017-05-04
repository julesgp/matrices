import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Operation from './components/Operation.js';
import NumberMatrices from './components/NumberMatrices.js';
import Data from './components/Data.js';
import AddData from './components/AddData.js';
import SubstractData from './components/SubstractData.js';
import MultiplyData from './components/MultiplyData.js';
import DivideData from './components/DivideData.js';
import NoMatrixError from './components/errors/NoMatrixError.js';
import Matrix from './components/Matrix.js';

class App extends React.Component {
	constructor(){
		super();
		this.state={
			display:{
				operation:true,
				numberMatrices:false,
                enterData:false,
                error: false,
                matrix:false,
			},
            typeOfError:{
                noMatrices:false,
            },
			operation: "",
            matrixClass: ["btnMatrices","btnMatrices", "btnMatrices"],
            rowSelection:["unselectedBtn", "unselectedBtn", "unselectedBtn", "unselectedBtn"],
            colSelection:["unselectedBtn", "unselectedBtn", "unselectedBtn", "unselectedBtn"],
            numMatrices: "",
            rows:"",
            columns:"",
		}
		this.chooseOperation = this.chooseOperation.bind(this);
        this.backNumMatrices = this.backNumMatrices.bind(this);
        this.chooseNumMatrix = this.chooseNumMatrix.bind(this);
        this.nextDataEntry = this.nextDataEntry.bind(this);
        this.goBackErrorOne = this.goBackErrorOne.bind(this);
        this.backMatrixSize = this.backMatrixSize.bind(this);
        this.sizeMatrix = this.sizeMatrix.bind(this);
        this.nextToMatrix = this.nextToMatrix.bind(this);
	}

	chooseOperation(e){
        var operationVal = e.target.id;
		this.setState({
			display:{
				operation:false,
				numberMatrices:true,
                enterData:false,
			},
            operation:operationVal,
        });
	}

    // E R R O R S

    goBackErrorOne(){
        this.setState({
            display:{
                operation:false,
                numberMatrices:true,
                enterData:false,
                error:false,
            },
            typeOfError:{
                noMatrices:false,
            },
        });
    }

    // BACK BUTTONS

    backNumMatrices(){
        this.setState({
            display:{
                operation:true,
                numberMatrices:false,
                enterData:false,
            },
            operation:""
        });
    }

    backMatrixSize(){
        this.setState({
            display:{
                operation:false,
                numberMatrices:true,
                enterData:false,
            },
        });
    }

    // NEXT BUTTONS

    nextDataEntry(){
        const listItems = this.state.matrixClass;
        if(this.state.matrixClass[0] == "btnMatrices" && this.state.matrixClass[1] == "btnMatrices" && this.state.matrixClass[2] == "btnMatrices"){
            this.setState({
                display:{
                    operation:false,
                    numberMatrices:false,
                    enterData:false,
                    error:true,
                },
                typeOfError:{
                    noMatrices:true,
                },
            });
        }else{
            this.setState({
                display:{
                    operation:false,
                    numberMatrices:false,
                    enterData:true,
                },
            });
        }
    }

    nextToMatrix(){
        const matrixRows = this.state.rows;
        const matrixCols = this.state.columns;

        if(matrixCols == "" || matrixRows == ""){
            this.setState({
                display:{
                    operation:false,
                    numberMatrices:false,
                    enterData:false,
                    error:true,
                },
                typeOfError:{
                    noMatrices:true,
                },
            });
        } else{
            this.setState({
                display:{
                    operation:false,
                    numberMatrices:false,
                    enterData:false,
                    error: false,
                    matrix:true,
                },
            });
        }
    }

    //FUNCTIONALITY

    chooseNumMatrix(e){
        // Set state for number of Matrices, also change class of selected number
        var numberMatrixVal = e.target.id;
        this.setState({
            numMatrices: numberMatrixVal,
        });

        if(numberMatrixVal == "2"){
            if(this.state.matrixClass[0] == "numMatrixSelected"){
                const unselect = ["btnMatrices","btnMatrices", "btnMatrices"];
                this.setState({
                    matrixClass: unselect,
                });

            }else{
                const updatedList = ["numMatrixSelected","btnMatrices", "btnMatrices"];
                this.setState({
                    matrixClass: updatedList,
                });
            }
        }

        if(numberMatrixVal == "3"){
            if(this.state.matrixClass[1] == "numMatrixSelected"){
                const unselect = ["btnMatrices","btnMatrices", "btnMatrices"];
                this.setState({
                    matrixClass: unselect,
                });

            }else{
                const updatedList = ["btnMatrices", "numMatrixSelected", "btnMatrices"];
                this.setState({
                    matrixClass: updatedList,
                });
            }
        }

        if(numberMatrixVal == "4"){
            if(this.state.matrixClass[2] == "numMatrixSelected"){
                const unselect = ["btnMatrices","btnMatrices", "btnMatrices"];
                this.setState({
                    matrixClass: unselect,
                });

            }else{
                const updatedList = ["btnMatrices", "btnMatrices", "numMatrixSelected"];
                this.setState({
                    matrixClass: updatedList,
                });
            }
        }
    }

    sizeMatrix(e){
        var selectedRow = e.target.id;
        var colOrRow = selectedRow.slice(0,1);
        var selectionChosen = selectedRow.slice(1,2);

        if(colOrRow == "c"){
            this.setState({
                columns:selectionChosen,
            });
            if(selectionChosen == 1){
                this.setState({
                    colSelection:["selectedBtn", "unselectedBtn", "unselectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 2){
                this.setState({
                    colSelection:["unselectedBtn", "selectedBtn", "unselectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 3){
                this.setState({
                    colSelection:["unselectedBtn", "unselectedBtn", "selectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 4){
                this.setState({
                    colSelection:["unselectedBtn", "unselectedBtn", "unselectedBtn", "selectedBtn"],
                });
            }

        }
        if(colOrRow == "r"){
            this.setState({
                rows:selectionChosen,
            });
            if(selectionChosen == 1){
                this.setState({
                    rowSelection:["selectedBtn", "unselectedBtn", "unselectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 2){
                this.setState({
                    rowSelection:["unselectedBtn", "selectedBtn", "unselectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 3){
                this.setState({
                    rowSelection:["unselectedBtn", "unselectedBtn", "selectedBtn", "unselectedBtn"],
                });
            } else if(selectionChosen == 4){
                this.setState({
                    rowSelection:["unselectedBtn", "unselectedBtn", "unselectedBtn", "selectedBtn"],
                });
            }
        }

    }

    render() {
    	let displayContent = "";
    	if(this.state.display.operation === true){
    	    displayContent = (
    	        <Operation operationChosen={this.chooseOperation}/>
    	    )
    	} else if(this.state.display.numberMatrices === true){
    		displayContent = (
    	        <NumberMatrices goBack={this.backNumMatrices} typeOfOperation={this.state.operation}
                typeOfClass={this.state.matrixClass} selectMatrixNum={this.chooseNumMatrix} dataEntry={this.nextDataEntry}/>
    	    )
    	} else if(this.state.display.enterData === true){
            if(this.state.operation == "addition"){
                displayContent =(
                    <AddData backButton={this.backMatrixSize} selectedSize={this.sizeMatrix} selectionR={this.state.rowSelection} selectionC={this.state.colSelection} nextStep={this.nextToMatrix}/>
                )
            }else if(this.state.operation == "substraction"){
                displayContent =(
                    <SubstractData/>
                )
            }else if(this.state.operation == "multiplication"){
                displayContent =(
                    <MultiplyData/>
                )
            }else if(this.state.operation == "division"){
                displayContent =(
                    <DivideData/>
                )
            }
        } else if(this.state.display.error === true){
            if(this.state.typeOfError.noMatrices == true){
                displayContent =(
                    <NoMatrixError goBackMatricesNum={this.goBackErrorOne}/>
                )
            }
        } else if(this.state.display.matrix === true){
            displayContent =(
                <Matrix columsChosen={this.state.columns} rowsNum={this.state.rows}/>
            )
        }
        return (
            <div>
               <Header/>
               {displayContent}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));