import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.users = [{ username: "satish", password: "satish" }];
    this.state = {
      username: "",
      password: "",
    };
  }
  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { auth } = this.props;
    console.log(username, password, this.users);
    let flag = false;
    this.users.forEach((user) => {
      if (user.username === username && user.password === password) {
        console.log("here");
        flag = true;
        auth();
        this.props.history.goBack();
      }
    });
    if (flag === false) {
      alert("incorrect Details");
    }
  };

  render() {
    console.log(this.props);
    const { status, history } = this.props;

    return (
      <form
        action=""
        onSubmit={this.handleSubmit}
        style={{ marginTop: "100px" }}
      >
        <div>
          <label htmlFor="">UserName</label>
          <input type="text" name="username" onChange={this.handleForm} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={this.handleForm} />
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
