import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Box,
  Link,
  Stack,
  Avatar,
  Popover,
  Checkbox,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelTourDetailsHeader({ tour, data}) {
  const { slug, ratings, reviews, favorited, tourGuide } = tour;
  const { e_title } = data;
  
  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };


  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1, pr: { md: 10 }, fontFamily:'Jamsil2' }}>
          {e_title}
        </Typography>
      </Stack>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {/* {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))} */}
      </Popover>
    </>
  );
}

TravelTourDetailsHeader.propTypes = {
  tour: PropTypes.shape({
    favorited: PropTypes.bool,
    location: PropTypes.string,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};
