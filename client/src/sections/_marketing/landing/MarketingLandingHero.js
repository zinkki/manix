// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Container, Typography, Button, Fab, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.1),
    imgUrl: '/assets/background/img-main.jpg',
  }),
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }} sx={{alignItems:'center'}}>
          <Grid
            xs={12}
            md={12}
            lg={12}
            sx={{
              textAlign: { xs: 'left', md: 'left' },
              alignItems : { xs: 'center', md: 'center' },
              mx: { xs: 0, md:22 },
            }}
          >
            <Typography variant="h5" sx={{ color: 'common.white', fontSize:{ xs:'15px', md:'26px', lg:'26px' }}}>
              전문성, 신뢰성, 차별성
            </Typography>

            <Typography style={{ fontFamily:'Jamsil2', fontWeight:'900' }}
                        sx={{ my: -0.2, mb: 4, color: 'common.white',
                              fontSize:{ xs:'26px', md:'52px', lg:'73px' } }} line={1}
                        variant='h1'
                         >
              자동차 & 모터스포츠<br/>
              비즈니스 솔루션 전문 기업
            </Typography>

            <Typography variant='h6' sx={{ color: 'common.white',
                fontSize:{ xs:'15px', md:'20px', lg:'20px' } }}>
              자동차에 열정을 가진 이들이 모여 만든 오토매닉스는<br/>
              국내외 자동차 유관 최고의 클라이언트들과 파트너십 관계를 맺고 있습니다.<br/>
              자동차 유관기업 행사 및 제휴, 모터스포츠 대회 기획 및 운영, BTL프로모션, e스포츠까지<br/>
              자동차를 주제로 한 다양한 분야의 전문가들로 이루어져 있습니다.
            </Typography>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={7}>
              
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
