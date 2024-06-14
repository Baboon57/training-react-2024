import {Component} from 'react';
import "./Calculator.css";
class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previousOperand: 0,
            currentOperand: null,
            operator: null,
        };
    }




    onInputChangeOperator = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            operator: value,
            previousOperand: this.state.currentOperand,
            currentOperand: null
        });
    };

    onClear = () => {
        this.setState({
            ...this.state,
            previousOperand: 0,
            currentOperand: null,
            operator: null
        });
    };

    DealWithComma = () => {
        const oldValue = this.state.currentOperand !== null ? this.state.currentOperand : 0;
        const newfloatValue = oldValue.toString() + ".";
        console.log(newfloatValue);
        this.setState( {
            currentOperand: newfloatValue

        })
    }
    AffichageCurrent = (event) => {
        const newValue = event.target.value;
        const oldValue = this.state.currentOperand !== null ? this.state.currentOperand : " ";
console.log(typeof (newValue), typeof (oldValue));
        const newTotal = parseFloat(oldValue.toString() + newValue.toString());

        this.setState( {
            currentOperand: newTotal
        })
    }

    BackSpace = () => {
        const oldValue = this.state.currentOperand !== null ? this.state.currentOperand : 0;
        const newDelValue = oldValue.toString().slice(0, -1);
        console.log(newDelValue);
        this.setState( {
            currentOperand: newDelValue
        })
    }


//calcul
    Operation = () => {
        switch (this.state.operator) {
            case "+":
                this.setState({
                    currentOperand: this.state.previousOperand + this.state.currentOperand
                });
                break;
            case "-":
                this.setState({
                    currentOperand: this.state.previousOperand - this.state.currentOperand
                });
                break;
            case "x":
                this.setState({
                    currentOperand: this.state.previousOperand * this.state.currentOperand
                });
                break;
            case "/":
                this.setState({
                    currentOperand: this.state.previousOperand / this.state.currentOperand
                });
                break;
        }

        }



    render() {
        return (
            <div className="calculator">
                <div className="display">
                    <div className="previous-nbr">{this.state.previousOperand} {this.state.operator}</div>
                    <div className="current-nbr">{this.state.currentOperand}</div>
                </div>
                <div className="buttons">
                    <button className="span-two" value="ac" onClick={this.onClear}>AC</button>
                    <button value="del"onClick={this.BackSpace}>DEL</button>
                    <button value="/" onClick={this.onInputChangeOperator}>%</button>

                    <button value="7" onClick={this.AffichageCurrent}>7</button>
                    <button value="8" onClick={this.AffichageCurrent}>8</button>
                    <button value="9" onClick={this.AffichageCurrent}>9</button>
                    <button value="x" onClick={this.onInputChangeOperator}>x</button>

                    <button value="4" onClick={this.AffichageCurrent}>4</button>
                    <button value="5" onClick={this.AffichageCurrent}>5</button>
                    <button value="6" onClick={this.AffichageCurrent}>6</button>
                    <button value="-" onClick={this.onInputChangeOperator}>-</button>

                    <button value="1" onClick={this.AffichageCurrent}>1</button>
                    <button value="2" onClick={this.AffichageCurrent}>2</button>
                    <button value="3" onClick={this.AffichageCurrent}>3</button>
                    <button value="+" onClick={this.onInputChangeOperator}>+</button>

                    <button value="0" onClick={this.AffichageCurrent}>0</button>
                    <button value="." onClick={this.DealWithComma}>.</button>
                    <button className="span-two" onClick={this.Operation}>=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;