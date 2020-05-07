import React from "react";
import Banner from "../Components/common/Banner";

const Home = (props) => {
  // console.log(props);
  return (
    <div style={{ marginTop: "80px" }}>
      <Banner img="https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80" />
      <Banner img="https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
    </div>
  );
};

export default Home;
