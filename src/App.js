import React from "react";
import "./App.css";
import NavBar from "./Components/Routing/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Login from "./Components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartNumber: 0,
      cart: [],
      addToCartStatus: false,
      data: [],
      isAuth: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random/50",
    })
      .then((res) => {
        this.makeData(res.data.message);
      })
      .catch((err) => console.log(err));
  }

  makeData(res) {
    // console.log(res);
    let data = [];
    res.forEach((item) => {
      data.push({
        id: uuidv4(),
        img: item,
        cost: Math.floor(Math.random() * 1000),
        status: false,
      });
    });
    this.setState({ data: data });
  }

  handleClick(e, history) {
    //   console.log(e.target);
    console.log(history);
    e.preventDefault();
    if (this.state.isAuth) {
      this.state.data.map((ele) => {
        return ele.id === e.target.id ? (ele.status = !ele.status) : "";
      });
      this.state.data.forEach((ele) => {
        if (ele.id === e.target.id && ele.status) {
          this.state.cart.push(ele);
        } else if (ele.id === e.target.id && !ele.status) {
          let deleteItem = this.state.cart.indexOf(ele);
          this.state.cart.splice(deleteItem, 1);
        }
      });

      this.setState({
        cart: this.state.cart,
        cartNumber: this.state.cart.length,
        data: this.state.data,
      });
    } else {
      // document.location.assign("#/login");
      history.push({ pathname: "/login" });
    }
  }

  handleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar cartNumber={this.state.cartNumber} status={this.state.isAuth} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/cart"
            render={() => {
              return <Cart data={this.state.cart} />;
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <Login
                  {...props}
                  auth={this.handleAuth}
                  status={this.state.isAuth}
                />
              );
            }}
          />
          }
          <Route
            path="/logout"
            render={() => {
              this.handleAuth();
              return <Redirect to="/" />;
            }}
          />
          <Route
            path="/shop"
            exact
            render={(props) => {
              return (
                <Shop
                  {...props}
                  data={this.state.data}
                  onClick={this.handleClick}
                />
              );
            }}
          />
          <Route
            path="/shop/:id"
            render={() => {
              return (
                <Shop data={this.state.dataBreed} onClick={this.handleClick} />
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
