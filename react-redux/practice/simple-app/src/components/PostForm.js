import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="col">
          <div className="row">
            <h1>Add Posts</h1>
            <form>
              {" "}
              <label>Title :</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <br />
              <label>Body :</label>
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
