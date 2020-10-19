import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export const Search = (props) => {
  const [valueSearch, setvalueSearch] = useState("");

  const handleInputSearch = (e) => {
    setvalueSearch(e.target.value);
  };

  const handleButtonSearch = (e) => {
    props.searchDriver(valueSearch);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-header">
          <h2>DRIVER MANAGEMENT</h2>
          <p>Data driver yang akan bekerja dengan Anda</p>
        </div>
        <div className="search-input">
          <div className="input-container">
            <button className="icon" onClick={handleButtonSearch}>
              <FaSearch />
            </button>
            <input
              className="input-field"
              type="text"
              placeholder="Cari Driver"
              onChange={handleInputSearch}
              value={valueSearch}
            />
          </div>
          <button className="btn">TAMBAH DRIVER +</button>
        </div>
      </div>
    </>
  );
};
