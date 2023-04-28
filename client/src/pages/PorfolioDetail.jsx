import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { alpha } from '@mui/material/styles';
import {
  Stack,
  Container,
  Box,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { paths } from 'src/routes/paths';
// _mock
import { _socials, _tours } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import LoadingScreen from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { TravelTourDetailsHeader, TravelTourDetailsGallery
, TravelTourDetailsSummary, TravelTourDetailsReserveForm } from 'src/sections/_travel/tour/details';

const _mockTour = _tours[0];

export default function PortfolioDetail() {
  const location = useLocation();
  const data = location.state.data;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return(
    <>
    <Box sx={{ bgcolor:'background.neutral' }}>
    <Container sx={{ overflow: 'hidden' }}>
        <Stack
          spacing={3}
          sx={{
            py:5,
            textAlign: { xs: 'center' , md: 'left'},
          }}
        >
          <Typography variant='h3'></Typography>
        </Stack>

        <TravelTourDetailsGallery images={_mockTour.gallery} data={data} />

        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">

          <Grid xs={12} md={12} lg={12}>
            
            <TravelTourDetailsHeader tour={_mockTour} data={data} />

            <TravelTourDetailsSummary tour={_mockTour} data={data} />

          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  )
}