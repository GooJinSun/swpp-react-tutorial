import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./NewTodo.css";

class NewTodo extends Component {
  state = {
    title: "",
    content: "",
    submitted: false,
  };

  postTodoHandler = () => {
    const { title, content } = this.state;
    const data = { title, content };

    alert("Submitted\n" + data.title + "\n" + data.content);
    this.setState({ submitted: true });
  };

  render() {
    const { title, content, submitted } = this.state;
    return (
      <>
        {submitted ? (
          <Redirect to="/todos" />
        ) : (
          <div className="NewTodo">
            <h1>Add a Todo</h1>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            ></input>
            <label>Content</label>
            <textarea
              rows="4"
              type="text"
              value={content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
            <button onClick={() => this.postTodoHandler()}>Submit</button>
          </div>
        )}
      </>
    );
  }
}

export default NewTodo;
