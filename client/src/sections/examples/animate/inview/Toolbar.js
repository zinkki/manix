import PropTypes from 'prop-types';
// @mui
import { Box, Paper, FormControlLabel, Switch, IconButton } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Toolbar({
  isText,
  isMulti,
  onChangeText,
  onChangeMulti,
  onRefresh,
  ...other
}) {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...other}
    >
      <FormControlLabel
        control={<Switch checked={isText} onChange={onChangeText} />}
        label="Text Object"
      />

      <Box sx={{ flexGrow: 1 }} />

      {!isText && (
        <FormControlLabel
          control={<Switch checked={isMulti} onChange={onChangeMulti} />}
          label="Multi Item"
        />
      )}

      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Paper>
  );
}

Toolbar.propTypes = {
  isMulti: PropTypes.bool,
  isText: PropTypes.bool,
  onChangeMulti: PropTypes.func,
  onChangeText: PropTypes.func,
  onRefresh: PropTypes.func,
};
