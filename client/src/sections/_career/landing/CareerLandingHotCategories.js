import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Container, Box, Paper } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerLandingHotCategories({ categories }) {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          my: { xs: 8, md: 10 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            pt: '100%',
            borderRadius: 2,
            textAlign: 'left',
            position: 'relative',
            bgcolor: 'transparent',
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 1,
              height: 1,
              top: 0,
              position: 'absolute',
            }}
          >
            <Typography variant="h4" sx={{ color: 'common.black'}}>
              efefefefefef
            </Typography>

            <Typography variant="body2" sx={{ color: 'common.black', mt: 5 }}>
              - 프로덕트 런칭 행사 기획 및 운영<br/>
              - 국내외 트랙 행사 기획 및 운영<br/>
              - 차량 주행 성능 및 상품성 체험 구성<br/>
              - 국내외 마켓 분석 및 세일즈<br/>
              - 디지털 마케팅 및 오프라인 체험 마케팅 행사<br/>
              - 해외 비즈니스
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
