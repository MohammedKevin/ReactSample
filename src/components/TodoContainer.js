import React from "react";
import Header from "./Header";
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
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
}
export default TodoContainer;
