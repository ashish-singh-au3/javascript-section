import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  render() {
    return (
      <div>
        <div className="col">
          <div className="row">
            {" "}
            <label>Title</label>
            <input type="text" value={this.state.title} />
            <label>Body</label>
            <input type="text" value={this.state.body} />
          </div>
        </div>
      </div>
    );
  }
}
