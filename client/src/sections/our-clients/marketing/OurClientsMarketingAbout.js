// @mui
import PropTypes from 'prop-types';
import { Typography, Stack, Container, Box } from '@mui/material';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function OurClientsMarketingAbout({ brands }) {
  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2" 
          sx={{fontFamily:'Jamsil3', mt:10, mb:5, 
          fontSize:{ xs:'32px', md:'50px', lg:'50px' } }}>
          PARTNERS
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ maxWidth: 1200, overflow: 'hidden' }}
        >
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/afreecatv.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/amg-speed-way.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/atlasbx.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/audi.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/benq.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/genesis.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/hankook.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/hyundai.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/innocean.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/iracing.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/kara.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/kolon-motors.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/kunos.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/michelin.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/racespot.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/superrace.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
            <Box>
              <Image
                alt=''
                src='/assets/images/partners/volkswagen.jpg'
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
          
        </Stack>
      </Stack>
    </Container>
  );
}

OurClientsMarketingAbout.propTypes = {
  brands: PropTypes.array,
};
