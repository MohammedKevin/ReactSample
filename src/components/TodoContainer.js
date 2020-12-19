import React from "react";
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
        <h1>This is my Todo Container</h1>
        {this.state.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </div>
    );
  }
}
export default TodoContainer;
