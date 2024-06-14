import { Component } from "react";
import "./App.css";
import "./calculator.jsx";
import Calculator from "./calculator.jsx";



export default class App extends Component {
	render() {
		return (
			<div>
				<Calculator />
			</div>
		);
	}
}

