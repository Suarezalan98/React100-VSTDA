import React from "react";

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      priority: "",
      description: ""
    };
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleOnClick() {
    let newTask = {
      id: this.state.id,
      description: this.state.description,
      priority: this.state.priority
    };
    this.props.addTask(newTask);
    this.state.id++;
    // this.props.taskCounter++;
    // console.log(this.props.taskCounter, "taskCounter");
  }

  render() {
    return (
      <div className="card border-secondary text-secondary">
        <div className="card-header" style={{ fontWeight: "bold" }}>
          Add New Todo
        </div>
        <div className="card-body">
          <label
            style={{ fontWeight: "bold", width: "100%" }}
            htmlFor="todoInput"
          >
            I want to...
            <textarea
              rows="3"
              type="text"
              name="amountDue"
              className="form-control create-todo-text"
              id="todoInput"
              onChange={this.handleDescription}
              value={this.state.description}
            ></textarea>
          </label>
        </div>
        <div className="card-body" style={{ width: "100%" }}>
          <label
            style={{ fontWeight: "bold", width: "100%" }}
            htmlFor="priorityRank"
          >
            How much of a priority is this?
            <select
              id="priorityRank"
              className="form-control create-todo-priority"
              placeholder="Select a Priority"
              onChange={this.handlePriority}
              value={this.state.priority}
            >
              <option value="selectPlaceHolder" disabled hidden>
                Select a Priority
              </option>
              <option value="1">Low Priority</option>
              <option value="2">Medium Priority</option>
              <option value="3">High Priority</option>
            </select>
          </label>
        </div>
        <div className="card-footer">
          <button
            type="button"
            style={{ width: "100%" }}
            className="btn-info create-todo"
            onClick={this.handleOnClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
