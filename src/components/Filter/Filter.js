import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { setFilter } from 'redux/contacts/contacts-filter-slice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <Box mb="16px">
      <TextField
        autoComplete="given-name"
        name="filter"
        fullWidth
        id="filter"
        label="Search field"
        autoFocus
        onChange={onFilterChange}
        value={filter}
      />
    </Box>
  );
};
