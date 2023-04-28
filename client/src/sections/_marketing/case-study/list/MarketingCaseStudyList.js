import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Pagination, Tabs, Tab, Box } from '@mui/material';
//
import MarketingCaseStudyItem from '../item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({ data }) {
 
  const { idx, e_title, d_date, pic1 } = data;

  return (
    <>
      {/* view project ( portfolio list ) */}
      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {data.map((data) => (
          <MarketingCaseStudyItem key={data.idx} data={data} />
        ))}
      </Box>

      {/* <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  );
}

MarketingCaseStudyList.propTypes = {
  caseStudies: PropTypes.array,
};
