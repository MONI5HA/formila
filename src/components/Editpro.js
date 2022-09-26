import React, { useContext, useState, useEffect } from "react";
import { prodContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function Editpro() {
  let context = useContext(prodContext);
  let navigate = useNavigate();
  let param = useParams();

  useEffect(() => {
    if (param.id) {
      getData();
    }
  }, []);

  async function getData() {
    let res = await axios.get(
      "https://614eacb5b4f6d30017b4833b.mockapi.io/products/" + param.id
    );
    console.log(res.data);
    let data = res.data;
    setname(data.name);
    setprice(data.price);
    setmodel(data.model);
    setunits(data.units);
  }

  let saveHandeler = async () => {
    let res = await axios.put(
      "https://633188bdcff0e7bf70eff218.mockapi.io/products/" + param.id,
      { name, price, model, units }
    );
    console.log(res);
    navigate("/all");
  };

  let [name, setname] = useState();
  let [price, setprice] = useState();
  let [model, setmodel] = useState();
  let [units, setunits] = useState();

  return (
    <div className="add-product col-8 mt-5">
      <h2 className="mb-4">Edit Product</h2>
      <div class="form-group">
        <label for="exampleInputname">Product Name</label>
        <input
          type="text"
          value={name}
          class="form-control"
          onChange={(e) => setname(e.target.value)}
          id="exampleInputname"
          aria-describedby="emailHelp"
        />

        <label for="exampleInputnum">Product Price</label>
        <input
          type="integer"
          value={price}
          class="form-control"
          onChange={(e) => setprice(e.target.value)}
          id="exampleInputnum"
          aria-describedby="emailHelp"
        />

        <label for="exampleInputdis">Product model</label>
        <input
          type="text"
          value={model}
          class="form-control"
          onChange={(e) => setmodel(e.target.value)}
          id="exampleInputdis"
          aria-describedby="emailHelp"
        />

        <label for="exampleInputnum">No Units</label>
        <input
          type="Number"
          value={units}
          class="form-control"
          onChange={(e) => setunits(e.target.value)}
          id="exampleInputnum"
          aria-describedby="emailHelp"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => saveHandeler()}
      >
        Update
      </button>
    </div>
  );
}
