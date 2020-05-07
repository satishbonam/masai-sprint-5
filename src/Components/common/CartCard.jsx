import React from "react";

class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                {this.props.cost}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartCard;
