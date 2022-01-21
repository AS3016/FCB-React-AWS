import Task from "./Task";

function TaskList(){
	const taskItemsList = [
		"Example of Example 1",
		"Example of Example 2",
		"Example of Example 3",
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
export default TaskList;