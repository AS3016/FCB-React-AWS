import React from "react";
import ReactDOM from "react-dom";

//My First component
function HelloWorld(){
	return <h1>Hello, world!</h1>;
}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));