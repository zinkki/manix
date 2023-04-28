import { useState, useEffect } from 'react';
// @mui
import { Typography, Box, Container } from '@mui/material';
//
import TeamMember from './TeamMember';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function TeamMarketingAbout({ members }) {
  
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
        setData(res.data.slice(0,6));
        console.log('axios success....');
      })
      .catch(() => console.log('err.....'))
  },[]);

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center',
       fontFamily:'Jamsil3', mt:12 , fontSize:{ xs:'32px', md:'50px', lg:'50px' } }}>
        PORTFOLIO
      </Typography>


      <Box 
        style={{marginBottom:'4rem', marginTop:'7rem'}}
        sx={{
          columnGap: 1,
          display: 'grid',
          rowGap: { xs: 1, md: 1 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {data.map((data,i)=> (
          <TeamMember key={i} data={data}/>
        ))}
        {/* {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))} */}
      </Box>
    </Container>
  );
}

