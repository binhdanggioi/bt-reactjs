import React from "react";
import TodoList from "../../components/TodoList";
import PersonList from "./insert";
import PersonListDelete from "./delete";
import {Link} from 'react-router-dom';
import axios from 'axios';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props); 
    //khai báo mảng items, trang thái text rỗng
    this.state = { items: [], text: "",  persons: [], name: '' };
  }
  async componentDidMount() {
   const {data}= await axios.get('http://5d36d86c86300e0014b647c7.mockapi.io/todos')
    this.setState({ persons: data });
  }
  handleDetail = id => {
      this.props.history.push(`index/${id}`);
      };
  handleChange = event => {
    this.setState({ name: event.target.value });
    //lấy giá trị của text xâu ra mỗi lần thay đổi
  };
  handleDelete = event =>{
    axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos${this.state.name}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      
  }
    handleSubmit = event => {
      event.preventDefault();
      axios.post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`, {
        name: this.state.name
      })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          axios.get('http://5d36d86c86300e0014b647c7.mockapi.io/todos')
          this.setState({ name: this.state.name });
      console.log(this.state.name);
    }
  render(){
    return(
      <div>
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.name} />
        <button onClick ={this.handleSubmit}>+</button>
        <ul>
          { this.state.persons.map(person => <li key={person.id} onClick={() => this.handleDetail(person.id)}>{person.name}</li>)}
        </ul>
    </div>
    </div>
  );
}
}


export default HomeScreen;
