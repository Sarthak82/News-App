import React from 'react';
import './Filters.css'; 

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <select onChange={(e) => onFilterChange('country', e.target.value)} className="filter-select">
        <option value="">All Countries</option>
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="jp">Japan</option>
        <option value="fr">Framce</option>
        <option value="gb">United Kingdom</option>

      </select>
      <select onChange={(e) => onFilterChange('category', e.target.value)} className="filter-select">
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="sports">Entertainment</option>
        <option value="sports">Weather</option>
        <option value="sports">Crime</option>

      </select>
    </div>
  );
};

export default Filters;
