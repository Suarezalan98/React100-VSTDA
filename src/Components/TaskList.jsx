import React from "react";
import IndividualTask from "./IndividualTask";
//import IndividualTask from "./IndividualTask";

export default class TaskView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.tasks.length === 0) {
      return (
        <div className="card-body" style={{ backgroundColor: "#ade2e6" }}>
          <div
            style={{ fontweight: "bold", fontSize: "24px", color: "#154144" }}
          >
            Welcome to Very Simple ToDo App
          </div>
          <div
            style={{ fontweight: "normal", fontSize: "16px", color: "#154144" }}
          >
            Get started now by adding a new todo on the left
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.tasks.map((item, index) => (
            <IndividualTask
              key={index}
              deleteTask={this.props.deleteTask}
              editTask={this.props.editTask}
              description={item.description}
              priority={item.priority}
              id={item.id}
            />
          ))}
        </div>
      );
    }
  }
}
