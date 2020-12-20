import React from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import axios from "axios";
class TodoContainer extends React.Component {
  state = {
    todos: [],
  };
  handleChange = (id) => {
    //This code isnt how its supose to be done but its in there since the code below isnt working properly
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      ],
    });
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   }),
    // }));
  };
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((reponse) =>
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
      );
  };
  addTodoItem = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((response) =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      );
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => this.setState({ todos: response.data }));
  }
  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
