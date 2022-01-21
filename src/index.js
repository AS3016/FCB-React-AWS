import React from "react";
import ReactDOM from "react-dom";
import"./index.css";

function Task(props){

	return(

		<li className="tasks-item">{props.taskName}</li>

		);
}

function TaskList(){
	const taskItemsList = [
		"Example1",
		"Example2",
		"Example3",
		"Example4"
	];

	return(
		<div>
			<input className="task-input" />
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task} />;
				})}
				
			</ul>
		</div>
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