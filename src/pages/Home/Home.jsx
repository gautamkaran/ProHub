import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-red-50">
      <Link to="/">Home</Link>
      <Link to="/project">project</Link>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Home;
