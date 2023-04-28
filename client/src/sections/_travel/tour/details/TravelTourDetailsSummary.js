import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// components
import Iconify from 'src/components/iconify';
import { Navigate } from 'react-router';

// ----------------------------------------------------------------------

export default function TravelTourDetailsSummary({ tour, data }) {
  const { location, tourGuide, description, availableEnd, availableStart } = tour;
  const { e_date, sub_title1, sub_contents1, sub_title2, sub_contents2, write_stamp,
          sub_title3, sub_contents3, sub_title4, sub_contents4, sub_title5,
          sub_link_title, sub_link_adrs, sub_contents5, e_contents } = data;
  return (
    <Stack spacing={5}>
      {/* -- Tour Overview -- */}
      <div>
        <Typography variant="body2" sx={{ mx:1 , mb: 5 }}>
        </Typography>
        <Box
          sx={{
            rowGap: 2.5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          <OverviewItem label="이벤트 일자" text={e_date} />
          <OverviewItem label={sub_title1} text={sub_contents1} />
          <OverviewItem label={sub_title2} text={sub_contents2} />
          <OverviewItem label={sub_title3} text={sub_contents3} />
          <OverviewItem label={sub_title4} text={sub_contents4} />
          <OverviewItem label={sub_title5} text={sub_contents5} />
          <OverviewItem2 label={sub_link_title} text={sub_link_adrs} />
        </Box>
      </div>

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      {/* -- Tour Description -- */}
      <div>
        <Typography variant="h5" paragraph >
          내용
        </Typography>
        <Typography sx={{ mb:10 }}>{e_contents}</Typography>
      </div>
      
    </Stack>
  );
}

TravelTourDetailsSummary.propTypes = {
  tour: PropTypes.shape({
    availableEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    availableStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    duration: PropTypes.string,
    highlights: PropTypes.array,
    includes: PropTypes.array,
    languages: PropTypes.array,
    location: PropTypes.string,
    program: PropTypes.array,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      phoneNumber: PropTypes.string,
    }),
  }),
};

// ----------------------------------------------------------------------

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
}
function OverviewItem2({ icon, label, text = '-',link }) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography sx={{ cursor:'pointer', color:'#0079f2' }} onClick={()=>{ window.open(`${text}`)} }>{text}</Typography>
      </Stack>
    </Stack>
  );
}

OverviewItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  text: PropTypes.string,
};
