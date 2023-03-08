import axios from "axios";
import React, { Component } from "react";

class Display extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (

      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>Password</th>
          <th>channel</th>
          <th>language</th>
          
        </tr>


      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.channel}</td>
            <td>{user.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Display;