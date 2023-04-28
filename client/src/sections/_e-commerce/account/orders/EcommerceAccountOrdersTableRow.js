import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Popover,
  Divider,
  TableRow,
  Checkbox,
  MenuItem,
  TableCell,
  IconButton,
  InputBase,
} from '@mui/material';
//  utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersTableRow({ row, selected }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const inputStyles = {
    pl: 1,
    '&.Mui-focused': {
      bgcolor: 'action.selected',
    },
  };

  return (
    <>
      <TableRow hover selected={selected}>

        <TableCell sx={{ px: 1 }}>
          <InputBase value={row.orderId} sx={inputStyles} />
        </TableCell>

        <TableCell sx={{ px: 1 }}>
          <InputBase value={row.item} sx={inputStyles} />
        </TableCell>

        <TableCell>{fDate(row.deliveryDate)}</TableCell>

        <TableCell sx={{ px: 1 }}>
          <InputBase value={fCurrency(row.price)} sx={inputStyles} />
        </TableCell>

        <TableCell align="right" padding="none">
          <IconButton>
            <Iconify icon="carbon:trash-can" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

EcommerceAccountOrdersTableRow.propTypes = {
  onSelectRow: PropTypes.func,
  row: PropTypes.shape({
    deliveryDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    item: PropTypes.string,
    orderId: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
  }),
  selected: PropTypes.bool,
};
