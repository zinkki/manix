import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Stack, IconButton } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// _mock
import { _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varHover, varTranHover } from 'src/components/animate';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function TeamMember({ data, ...other }) {
  const navigate = useNavigate();
  const { pic1, e_title } = data;
  const imgurl = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic1}`;
  return (
    <Stack {...other}>
      <Box  onClick={()=>navigate(`detail/${data.idx}`, { state : { data:data }})}
        component={m.div}
        whileHover="hover"
        variants={varHover(0.99)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden',cursor: 'pointer' }}
      >
        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ width: 1, zIndex: 9, bottom: 24, position: 'absolute' }}
          >
            <Typography variant='h5' sx={{ color:'common.white',
             fontSize:{ xs:'18px', md:'18px', lg:'18px' }}}>
              {e_title}
            </Typography>
          </Stack>
        </StyledOverlay>

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          {/* <Image src={photo} alt={name} ratio="4/3" /> */}
          <Image src={imgurl} alt='' ratio='4/3' />
        </m.div>
      </Box>
    </Stack>
  );
}

TeamMember.propTypes = {
  member: PropTypes.object,
};
