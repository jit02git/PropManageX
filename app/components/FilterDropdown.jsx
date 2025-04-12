'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/app/redux/filterSlice';

const FilterDropdown = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.filter.selectedCategory);

  const categories = ['All', 'Apartment', 'Villa', 'Studio', 'House'];

  const handleChange = (e) => {
    const category = e.target.value === 'All' ? '' : e.target.value;
    dispatch(setCategory(category));
  };

  return (
    <select
      value={selectedCategory || 'All'}
      onChange={handleChange}
      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;