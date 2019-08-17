import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    };

    axios
      .post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(console.log);

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
