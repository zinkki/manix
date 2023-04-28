import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
// @mui
import { Container, Typography, Button, Link, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { useNavigate } from 'react-router';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {

  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      idx:0,
      e_title: '',
      e_client:'',
      e_dateStart:'',
      e_dateEnd:'',
      e_location:'',
      e_platform:'',
      e_for:'',
      e_work:'',
      e_contents:'',
      write_timestamp:'',
      e_picture1:'',
      e_picture2:'',
      e_picture3:'',
      e_picture4:'',
      e_picture5:'',
    }
  ])

  useEffect(() => {
    axios.get('/api/portfolioList')
      .then((res) => {
        setData(res.data);
      })
      .catch(() => console.log('err.....22'))
  },[]);

  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 10, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 8, md: 4 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant='h5' sx={{ color: 'text.primary', fontSize:{ xs:'18px', md:'24px', lg:'27px' } }}>
              자동차 산업의 게임체인저
            </Typography>
            <Typography variant="h3" sx={{ fontFamily:'Jamsil2' }}>
              AUTOMANIX
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="body2" sx={{ mt: 3, lineHeight:2 }}>
              오토매닉스는 국내 최대 디지털 자산 거래소 두나무 계열사로<br/>
              2021년, 국내 최대 E스포츠 레이싱 대회인 AMX E스포츠<br/>챔피언십을 개최하였습니다.<br/>
              나아가 구성원들의 뛰어난 역량을 바탕으로<br/>
            </Typography>
            <Typography variant="h6" sx={{ my: 1, mb: 5, fontWeight:700,
              fontSize:{ xs:'18px', md:'24px', lg:'27px' } }}>
              국내 자동차 산업의 게임체인저로서 새로운<br/>바람을 불어넣는 젊고 혁신적인 기업입니다.
            </Typography>
          </m.div>

          
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={ () => navigate('list', { state : { data:data }}) }
          >
            View Project
          </Button>
          
         
        </Grid>

        <Grid xs={12} md={4} mt={4} mx={2}>
          <Stack spacing={1} alignItems="flex-start">
            <Typography variant="h6" sx={{ mb:3, fontWeight:700 }}>오토매닉스 관계사</Typography>
            <a href='https://www.dunamu.com/ko' style={{textDecoration:'none'}}>두나무</a>
            <a href='https://amxrace.com/' style={{textDecoration:'none'}}>AMX GLOBAL</a>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
