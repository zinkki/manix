import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Stack, Card } from '@mui/material';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function PricingHome() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      />

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          mb: { xs: 8, md: 10 },
        }}
      >
        <Card 
          sx={{
            p: 5,
            boxShadow: (theme) => theme.customShadows.z1,
          }}
        >
          <Stack spacing={2}>
            <Stack justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
                WHAT WE DO
              </Typography>
            </Stack>
            <Stack justifyContent="space-between">
              <Typography variant="h3" component="div" sx={{ textTransform: 'uppercase', fontFamily:'Jamsil2' }}>
                EXPERTS
              </Typography>
            </Stack>
            <Stack spacing={2.5}>we build digital solutions.</Stack>
          </Stack>
        </Card>
        <Card 
          sx={{
            p: 5,
            bgcolor:'background.neutral',
          }}
        >
          <Stack spacing={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontWeight:600,
                fontSize: { xs: '20px' } }}>
                1. 자동차 브랜드 및 유관기업<br/>행사 기획 / 운영
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="body2">
              - 프로덕트 런칭 행사 기획 및 운영<br/>
              - 국내외 트랙행사 기획 및 운영<br/>
              - 차량 주행 성능 및 상품성 체험 구성<br/>
              - 국내외 마켓 분석 및 세일즈<br/>
              - 디지털 마케팅 및 오프라인 체험 마케팅 행사<br/>
              - 해외 비지니스<br/>
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card 
          sx={{
            bgcolor:'background.neutral',
            p: 5,
          }}
        >
          <Stack spacing={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontWeight:600, fontSize: { xs: '20px' } }}>
                2. 국내외 모터스포츠 행사<br/>기획 및 운영
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="body2">
              - 모터스포츠 행사/대회 기획 및 운영<br/>
              - 프로모터, 레이싱 팀 운영, 커뮤니케이션,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;물류 서비스, 전문 경기 운영 조직, 규정<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;제정 등 해외 대회 국내 유치 컨설팅<br/>
              - 온 오프라인 관객 유치 마케팅<br/><br/>
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card 
          sx={{
            bgcolor:'background.neutral',
            p: 5,
          }}
        >
          <Stack spacing={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontWeight:600, fontSize: { xs: '20px' } }}>
                3. BTL 프로모션<br/>기획 및 운영
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="body2">
              - BTL 이벤트 기획 및 운영<br/>
              - 제품 홍보, 고객 체험 마케팅<br/>
              - 팝업 스토어, 익스피리언스, 내외부 전시, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;참가자 관리 및 커뮤니케이션, 고객응대<br/>
              - 프로모션 KPI 달성<br/><br/><br/>
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card 
          sx={{
            p: 5,
            bgcolor:'background.neutral',
          }}
        >
          <Stack spacing={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontWeight:600, fontSize: { xs: '20px' } }}>
                4. 국내 최고 e스포츠<br/>서비스 제공
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="body2">
              - 국내 최대 e스포츠 레이싱대회<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;(AMX) 운영 경험<br/>
              - 국내외 e스포츠 대회 기획 및 운영<br/>
              - 고퀄리티 e스포츠 방송 제작 및 송출<br/>
              - 글로벌 게임 제작사 협업(iRacing)<br/>
              - e스포츠 전용 규정 제정<br/>
              - 한국 자동차 경주 협회 대회 공인<br/>
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card 
          sx={{
            bgcolor:'background.neutral',
            p: 5,
          }}
        >
          <Stack spacing={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontWeight:600, fontSize: { xs: '20px' } }}>
                5. 제휴 및 네트워킹<br/>솔루션 제공
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="body2">
              - 자동차 유관 산업 제휴 및 파트너십<br/>
              - 제조사, 협회, 팀, 물류사, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;스트리밍 플랫폼 등 다양한<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;분야의 파트너들을 통한 솔루션 제공<br/><br/><br/><br/>
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
}
