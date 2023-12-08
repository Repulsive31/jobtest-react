// CategoryBar.js
import React from 'react';
import CategoryData from './categoryData';

const CategoryBar = ({ categoryId }) => {
  const { categoryName, primaryImage, secondaryImage, itemName } = CategoryData[categoryId];

  return (
    <div className="categoryBar">
      <div className="categoryProduct">
          <p>{categoryName}</p>
          <img src={primaryImage} alt={categoryName} />
      </div>
      <div className="categoryItems">
        {[...Array(6)].map((_, index) => (
          <div className="categoryItem" key={index}>
            <p>{itemName}</p>
                <img src={secondaryImage} alt={itemName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
