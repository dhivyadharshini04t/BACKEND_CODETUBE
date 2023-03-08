import React ,{Component} from 'react'


import axios from 'axios'
import './Page.css';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        name:'',
        email:'',
        password: '',
        channel: '',
        language:'',
      
    };
  }
  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlenameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleemailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlepasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlechannelChange = (event) => {
    this.setState({ channel: event.target.value });
  };

  handlelanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        channel: this.state.channel,
        language: this.state.language,
        
      };
    
      axios.post('http://127.0.0.1:8080/addDetails', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
      <label className="sign-label">Id</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        /><br/><br/>
        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handlenameChange}
        /><br/><br/>

        <label className="sign-label">Email</label>
        <input
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleemailChange}
        /><br/><br/>
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          value={this.state.password}
          onChange={this.handlepasswordChange}
        /><br/><br/>
        <label className="sign-label">Channel</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.channel}
          onChange={this.handlechannelChange}
        />
<br/><br/>
        <label className="sign-label">Language</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.language}
          onChange={this.handlelanguageChange}
        /><br/><br/>
        
      <button className="login-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default Signup;