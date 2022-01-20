import React from "react";
import ReactDOM from "react-dom";
import"./index.css";

function App(){
	const paraStyle = {
		"marginBottom": "15px"
	};
	return(
		<div className="app">
			<header className="app-header">
				<h1>My Amazing ToDo-List App</h1>
				<p style={paraStyle}>The most simple and amaing todo-list React app.</p>
				<ul>
					<li className="task-item">Example 1 </li>
					<li className="task-item">Example 2 </li>
					<li className="task-item">Example 3</li>
				</ul>
			</header>
		</div>
		);
}

ReactDOM.render(<App />, document.getElementById("root"));