import{useState} from "react";
import Task from "./Task";

function TaskList(){
	const [taskItemsList, setTaskItemsList] = useState([
		"Example of Example 1",
		"Example of Example 2",
		"Example of Example 3"
	]);

const [taskValue, setTaskValue] = useState("");
 // console.log("taskValue: ", taskValue);	

 const inputChangeHandler = (e) => {

 	setTaskValue(e.target.value)
 };

 const addTaskHandler =() => {
 	setTaskItemsList([taskValue, ...taskItemsList]);
 	setTaskValue("");
 };

	return(
		<div>
			<input 
				className="task-input" 
				placeholder="Create a new task"
				onChange={inputChangeHandler}
				onBlur={addTaskHandler}
				value={taskValue}
			/>
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task} />;
				})}
				
			</ul>
		</div>
	);

}
export default TaskList;