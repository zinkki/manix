import { useLocation } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Link,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
//
import { pageLinks, navConfig } from '../nav/config-navigation';
import ListDesktop from './ListDesktop';
import ListMobile from './ListMobile';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const isMdUp = useResponsive('up', 'md');

  const { pathname } = useLocation();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary', mt:5 }}>
        (주)오토매닉스 | 대표자 : 이상학 | 주소 : 경기도 광명시 일직로 43, A동 13층 1312호(일직동, GIDC) | 사업자등록번호 319-88-01686 <br/>
        대표번호: 070-7773-9037 | 대표 이메일 : <a href="mailto:amx_biz@auto-manix.com">amx_biz@auto-manix.com</a> <br/><br/>
        © Copyright 2023 Automanix Inc. All rights reserved.
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary', mt:5 }}>
        (주)오토매닉스 | 대표자 : 이상학 | 주소 : 경기도 광명시 일직로 43, A동 13층 1312호(일직동, GIDC) | 사업자등록번호 319-88-01686 <br/>
        대표번호: 070-7773-9037 | 대표 이메일 : <a href="mailto:amx_biz@auto-manix.com">amx_biz@auto-manix.com</a> <br/><br/>
        © Copyright 2023 Automanix Inc. All rights reserved.
      </Typography>
    </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
