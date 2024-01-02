import React, { useState, useEffect } from "react";
import Card from "./Card";

function Exclusive() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.products);
        setFilteredData(data?.products); // Initialize filteredData with all products
      });
  }, []);

  const handleSearch = () => {
    let newFilteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  const handlePriceFilter = () => {
    let newFilteredData = data;

    if (selectedPriceRange !== "all") {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      newFilteredData = newFilteredData.filter(
        (item) =>
          item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice)
      );
    }

    setFilteredData(newFilteredData);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSelectedPriceRange("all");
    setFilteredData(data);
  };

  return (
    <div className="container mx-auto py-20 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Exclusive products
      </h2>
      <div className="md:flex justify-between mt-20">
        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-md w-[300px] px-3 h-8 py-4 block border border-gray-400 outline-none rounded-l-md"
          />
          <button
            className="px-4 py-1 h-[34px] bg-sky-500 text-white font-semibold rounded-r-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center items-center mb-8">
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="px-3 h-8 border border-gray-400 outline-none rounded-l-md"
          >
            <option value="all">All Prices</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-500">$101 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            {/* Add more price range options as needed */}
          </select>
          <button
            className="px-2 py-1 bg-sky-500 text-white font-semibold rounded-r-md"
            onClick={handlePriceFilter}
          >
            Apply Price Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 bg-gray-300 mt-16 text-black font-semibold rounded-md"
          onClick={handleClear}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Exclusive;
