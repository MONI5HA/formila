import React from "react";
import { Link } from "react-router-dom";

export function Head() {
  return (
    <div className="header">
      <Link to="/all">
        <button className="btn btn-warning btn-lg">All Products</button>
      </Link>
      <Link to="add-product">
        <button className="btn btn-success btn-lg">Add Product</button>
      </Link>
    </div>
  );
}
