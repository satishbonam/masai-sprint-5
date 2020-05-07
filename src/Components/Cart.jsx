import React from "react";
import { v4 as uuidv4 } from "uuid";
import CartCard from "./common/CartCard";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cards = this.props.data.map((item) => {
      return (
        <CartCard key={uuidv4()} src={item.img} cost={`RS:${item.cost}`} />
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

export default Cart;
