import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Badge, Container, IconButton, Button } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MegaMenuDesktopHorizon, MegaMenuMobile } from 'src/components/mega-menu';
//
import { data } from './config-navigation';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
}));

// ----------------------------------------------------------------------

export default function EcommerceHeader() {
  const isMdUp = useResponsive('up', 'md');

  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
   <></>
  );
}
