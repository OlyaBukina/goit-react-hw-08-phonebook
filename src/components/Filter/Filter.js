import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { setFilter } from 'redux/contacts/contacts-filter-slice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const filterValue = e.currentTarget.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterLabel>
      Filter contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search"
      />
    </FilterLabel>
  );
};
