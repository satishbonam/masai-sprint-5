import React from "react";
import { Link } from "react-router-dom";

class ShopCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e, this.props.history);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="col mb-4">
          <div className="card" style={{ width: "400px" }}>
            <img
              src={this.props.src}
              className="card-img-top"
              alt="img"
              style={{ width: "400px", height: "300px" }}
            />
            <div className="card-body">
              <h5 style={{ float: "left" }} className="card-title">
                Rs:{this.props.cost}
              </h5>
              <span style={{ float: "right" }}>
                <Link to="/billing">
                  <button
                    onClick={this.props.onClick}
                    className="btn btn-danger"
                  >
                    Buy
                  </button>
                </Link>
              </span>

              <span style={{ float: "right", marginRight: "20px" }}>
                <button
                  className={`btn ${!this.props.status && "btn-info"} ${
                    this.props.status && "btn-success"
                  }`}
                  id={this.props.id}
                  onClick={this.handleClick}
                >
                  {!this.props.status && "(+)Add to Cart"}
                  {this.props.status && "(-)Remove"}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCard;
