import React, { useState } from "react";

const categories = [
  "general",
  "technology",
  "sports",
  "economy",
  "health",
  "science",
  "entertainment",
];

const CategorySelector = ({ selectedCategories, onCategoryChange }) => {
  const toggleCategory = (category) => {
    let updated;
    if (selectedCategories.includes(category)) {
      updated = selectedCategories.filter((c) => c !== category);
    } else {
      updated = [category, ...selectedCategories];
    }
    onCategoryChange(updated); // send up to parent
  };

  return (
    <div>
      <h3>Select Categories:</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              border: "1px solid gray",
              backgroundColor: selectedCategories.includes(cat)
                ? "#007BFF"
                : "#FFF",
              color: selectedCategories.includes(cat) ? "#FFF" : "#000",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
