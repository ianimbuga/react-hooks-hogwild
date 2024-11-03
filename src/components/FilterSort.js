import React from 'react';

const FilterSort = ({ setFilterGreased, setSortOption }) => (
    <div>
        <label>
            <input type="checkbox" onChange={({ target }) => setFilterGreased(target.checked)} />
            Show Greased
        </label>
        <select onChange={({ target }) => setSortOption(target.value)}>
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
        </select>
    </div>
);

export default FilterSort;
