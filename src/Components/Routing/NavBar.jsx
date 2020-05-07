import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import SelectInput from "../common/SelectInput";
import LinkBtn from "../common/LinkBtn";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "/breedList.json",
    })
      .then((res) => {
        this.setState({ breedList: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleSubmit(e) {
    e.preventDefault();
    return (
      <Link to={`/shop/${e.target.children[0].value}`}>
        {e.target.children[0].value}
      </Link>
    );
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {[{ to: "/shop", label: "Shop" }].map((item) => {
                return (
                  <LinkBtn key={uuidv4()} to={item.to} label={item.label} />
                );
              })}
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handleSubmit}
            >
              <SelectInput
                // onChange={this.handleSubmit}
                data={this.state.breedList}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <span className="nav-item">
              <Link to="/cart" className={`nav-link`}>
                <svg
                  className="bi bi-bag-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
                </svg>
                <span className="badge badge-light">
                  {this.props.cartNumber}
                </span>
              </Link>
            </span>
            <ul className="navbar-nav ">
              {!this.props.status && (
                <LinkBtn key={uuidv4()} to="/login" label={"Login"} />
              )}
              {this.props.status && (
                <LinkBtn key={uuidv4()} to="/logout" label={"Logout"} />
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
