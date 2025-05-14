import "../styles/CategorySelector.css";

const categories = [
  "general",
  "technology",
  "sports",
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
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`category-button ${
              selectedCategories.includes(cat) ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
