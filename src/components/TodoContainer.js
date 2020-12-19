import React from "react";
import TodosList from "./TodosList";
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Create a react app",
        completed: true,
      },
      {
        id: 2,
        title: "Learn react",
        completed: true,
      },
      {
        id: 3,
        title: "Do the dishes",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>This is my TodoContainer. Under this is my TodosList Component</h1>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}
export default TodoContainer;
