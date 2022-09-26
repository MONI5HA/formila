import React, { useContext, useEffect, useState } from "react";
import { prodContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Allproducts() {
  useEffect(() => {
    getData();
  }, []);
  let context = useContext(prodContext);
  let navigate = useNavigate();

  async function getData() {
    let respon = await axios.get(
      "https://633188bdcff0e7bf70eff218.mockapi.io/products"
    );
    context.setData(respon.data);
  }

  async function deleteItem(id) {
    let respon = await axios.delete(
      "https://633188bdcff0e7bf70eff218.mockapi.io/products/" + id
    );
    getData();
  }

  return (
    <div className="products col-12">
      <h2>All Products</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Model</th>
            <th scope="col">Units</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>&#8377;{e.price}</td>
                <td>{e.model}</td>
                <td>{e.units}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      navigate("/edit-product/" + e.id);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
