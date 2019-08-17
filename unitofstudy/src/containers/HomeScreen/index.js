import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TodoDetailScreen from "../TodoDetailScreen/index";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], name: "" };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      "http://5d36d86c86300e0014b647c7.mockapi.io/todos"
    );
    this.setState({ persons: data });
  }
  handleDetail = id => {
    this.props.history.push(`index/${id}`);
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleDelete = async id => {
    await axios.delete(
      `http://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`
    );
    alert("Ngu chưa lỡ xóa mất con mẹ mày rồi !!!");
    this.componentDidMount();
  };
  handleSubmit = async event => {
    await axios
      .post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`, {
        name: this.state.name
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        axios.get("http://5d36d86c86300e0014b647c7.mockapi.io/todos");
        this.setState({ name: "" });
      });
    this.componentDidMount();
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button onClick={this.handleSubmit}>+</button>
          {this.state.persons.map(person => (
            <table key={person.id} className="center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="link">
                    <Link to={"/" + person.id}>{person.id}</Link>
                  </td>
                  <td className="link">
                    <Link to={"/" + person.id}>{person.name}</Link>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <button onClick={() => this.handleDelete(person.id)}>
                  delete
                </button>
              </tfoot>
            </table>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
