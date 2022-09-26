import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Addpro } from "./components/Addpro";
import { Allproducts } from "./components/Allproducts";
import { Editpro } from "./components/Editpro";
import { Head } from "./components/Head";
import { getDefaultNormalizer } from "@testing-library/react";
export const prodContext = React.createContext("");

function App() {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let respon = await axios.get(
        "https://633188bdcff0e7bf70eff218.mockapi.io/products"
      );
      setData(respon.data);
    } catch (error) {
      alert("someting went worng:" + error);
    }
  }

  let [data, setData] = useState([]);

  return (
    <div className="container">
      <Router>
        <prodContext.Provider value={{ data, setData }}>
          <Head />
          <Routes>
            <Route path="/all" element={<Allproducts />} />
            <Route path="/" element={<Allproducts />} />
            <Route path="/add-product" element={<Addpro />} />
            <Route path="/edit-product/:id" element={<Editpro />} />
          </Routes>
        </prodContext.Provider>
      </Router>
    </div>
  );
}

export default App;
