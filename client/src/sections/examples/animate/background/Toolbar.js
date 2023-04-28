import PropTypes from 'prop-types';
// @mui
import { Paper, IconButton } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Toolbar({ onRefresh, ...other }) {
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} {...other}>
      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Paper>
  );
}

Toolbar.propTypes = {
  onRefresh: PropTypes.func,
};
