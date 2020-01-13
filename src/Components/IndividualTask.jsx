import React from "react";

export default class IndividualTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      description: this.props.description,
      priority: this.props.priority,
      checked: false
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleBackgroundColor = this.handleBackgroundColor.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleFontColor = this.handleFontColor.bind(this);
    this.handleCheckedLine = this.handleCheckedLine.bind(this);
  }

  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
    console.log(this.state.priority, "priority");
  }

  handleOnSave() {
    let editedTask = {
      id: this.props.id,
      description: this.state.description,
      priority: this.state.priority
    };
    this.props.editTask(editedTask);
    this.setState({ isBeingEdited: false });
  }

  handleChecked() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  handleCheckedLine() {
    if (this.state.checked == true) {
      return "line-through";
    } else if (this.state.checked == false) {
      return "";
    }
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleEditClick() {
    this.setState({ isBeingEdited: true });
  }

  handleBackgroundColor() {
    if (this.state.priority == "3") {
      return "#e6b1ad";
    } else if (this.state.priority == "2") {
      return "#e6cead";
    } else {
      return "#ade6b1";
    }
  }

  handleFontColor() {
    if (this.state.priority == "3") {
      return "#531d19";
    } else if (this.state.priority == "2") {
      return "#655609";
    } else {
      return "#19531d";
    }
  }

  render() {
    if (this.state.isBeingEdited == true) {
      return (
        <div
          className="card-body"
          style={{
            backgroundColor: this.handleBackgroundColor(),
            color: this.handleFontColor()
          }}
        >
          <div>
            <label
              style={{ fontWeight: "bold", width: "100%" }}
              htmlFor="todoInput"
            >
              Description
              <textarea
                rows="3"
                type="text"
                name="amountDue"
                className="form-control update-todo-text"
                id="todoInput"
                onChange={this.handleDescriptionChange}
                defaultValue={this.state.description}
              ></textarea>
            </label>
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{ fontWeight: "bold", width: "100%" }}
              htmlFor="priorityRank"
            >
              How much of a priority is this?
              <select
                id="priorityRank"
                className="form-control update-todo-priority"
                placeholder="Select a Priority"
                defaultValue={this.state.priority}
                onChange={this.handlePriorityChange}
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
          <div>
            <button
              type="button"
              style={{ width: "100%" }}
              className="btn-success update-todo"
              onClick={this.handleOnSave}
            >
              Save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`card-body`}
          style={{
            backgroundColor: this.handleBackgroundColor(),
            color: this.handleFontColor()
          }}
        >
          <div className="row">
            <div className="col-sm-2">
              <input
                type="checkbox"
                onClick={this.handleChecked}
                id="task-1"
                checked={this.state.checked}
              ></input>
            </div>
            <div className="col-sm-6">
              <label
                htmlFor="task-1"
                style={{ textDecoration: this.handleCheckedLine() }}
              >
                {this.state.description}
              </label>
            </div>
            <div className="col-sm-4 text-right">
              <a
                style={{ color: "white" }}
                type="button"
                onClick={() => this.setState({ isBeingEdited: true })}
                className="btn btn-info btn-sm edit-todo"
              >
                <i className="fas fa-pen-square"></i>
                Edit
              </a>
              <a
                type="button"
                className="btn btn-danger btn-sm delete-todo"
                onClick={() => {
                  this.props.deleteTask(this.props.id);
                }}
                style={{ color: "white" }}
              >
                <i className="fas fa-trash"></i>
                Trash
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}
