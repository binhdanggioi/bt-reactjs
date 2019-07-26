import React from 'react';
import axios from 'axios';

export default class PersonListDelete extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Delete</button>
        </form>
      </div>
    )
  }
}