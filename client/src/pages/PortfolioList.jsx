import { Container, Typography, Stack, Box } from '@mui/material';
import { MarketingCaseStudyList } from 'src/sections/_marketing/case-study/list';
import { _caseStudies } from 'src/_mock';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export default function PortfolioList() {

  const location = useLocation();
  const data = location.state.data;

  useEffect(() => {
    console.log('list...');
  },[])

  return(
    <>
    <Box sx={{bgcolor:'background.neutral'}}>
		<Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" 
          style={{fontFamily:'Jamsil3'}} 
          sx={{fontSize:{ xs:'32px', md:'50px', lg:'50px' }}}>Portfolio List</Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_caseStudies} data={data}/>
      </Container>
      </Box>
    </>
  )
}