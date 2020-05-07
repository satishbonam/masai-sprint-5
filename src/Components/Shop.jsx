import React from "react";
// import { Link, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ShopCard from "./common/ShopCard";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const { data, onClick } = this.props;
    const cards = data.map((item) => {
      return (
        <ShopCard
          key={uuidv4()}
          id={item.id}
          src={item.img}
          cost={item.cost}
          status={item.status}
          onClick={onClick}
          history={this.props.history}
        />
      );
    });
    return (
      <div
        className="row row-cols-1 row-cols-md-3"
        style={{ marginTop: "100px" }}
      >
        {cards}
      </div>
    );
  }
}

export default Shop;
