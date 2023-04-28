import PropTypes from 'prop-types';
// @mui
import { Box, Autocomplete, Checkbox, TextField } from '@mui/material';
// _mock
import _mock from 'src/_mock';

// ----------------------------------------------------------------------

export default function ElearningFilterCategories({ filterCategories, onChangeCategory }) {
  return (
    <Autocomplete
      multiple
      limitTags={1}
      disableCloseOnSelect
      options={_mock.jobCategories}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          variant="filled"
          placeholder="All Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            sx: { pb: 1 },
          }}
        />
      )}
      ChipProps={{ color: 'info', size: 'small' }}
      renderOption={(props, option, { selected }) => (
        <Box component="li" {...props} sx={{ p: '0 !important' }}>
          <Checkbox size="small" disableRipple checked={selected} />
          {option}
        </Box>
      )}
    />
  );
}

ElearningFilterCategories.propTypes = {
  filterCategories: PropTypes.array,
  onChangeCategory: PropTypes.func,
};
