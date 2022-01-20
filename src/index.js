import React from "react";
import ReactDOM from "react-dom";
import"./index.css";

function Task(props){

	return(

		<li className="tasks-item">{props.taskName}</li>

		);
}

function TaskList(){
	return(
		<ul>
			<Task taskName="Example1" />
			<Task taskName="Example2" />
			<Task taskName="Example3" />
		</ul>
		);
}

function App(){
	const paraStyle = {
		"marginBottom": "15px"
	};
	return(
		<div className="app">
			<header className="app-header">
				<h1>My Amazing ToDo-List App</h1>
				<p style={paraStyle}>The most simple and amaing todo-list React app.</p>
				<TaskList />
			</header>
		</div>
		);
}

ReactDOM.render(<App />, document.getElementById("root"));