import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.1),
    imgUrl: '/assets/images/home/img-success.jpg',
  }),
  textAlign: 'right',
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  return (
    <MotionViewport>
      
      <StyledRoot>
        <m.div variants={varFade({ distance: 50 }).inUp}>
          <Container>
          <Typography variant="h2" sx={{ mt: 8, mb: 8, mx: 4,
            fontSize:{ xs:'18px', md:'52px', lg:'60px' }, zIndex:99 }}>
            <font style={{ fontFamily:'Jamsil3', fontWeight:900 }}>오토매닉스는</font> 귀사의 성공적인<br/>이벤트와 함께합니다.
          </Typography>
          </Container>
        </m.div>
      </StyledRoot>
    </MotionViewport>
  );
}
