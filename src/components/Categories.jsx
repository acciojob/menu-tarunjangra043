const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const btnId = `filter-btn-${index + 1}`;
        return (
          <button
            type="button"
            className="filter-btn"
            id={btnId}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
