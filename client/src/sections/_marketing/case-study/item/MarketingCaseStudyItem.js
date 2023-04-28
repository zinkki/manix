import PropTypes from 'prop-types';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import {m} from 'framer-motion';
import TextMaxLine from 'src/components/text-max-line';
import { useEffect } from 'react';
import { varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyItem({ data }) {
  const { e_title, pic1 } = data;

  const navigate = useNavigate();
  const imgurl = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic1}`;
  return (
    <m.div
      whileHover="hover"
      variants={{
      hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}>
      <Image src={imgurl} alt='' ratio="1/1" 
        sx={{ borderRadius: 2, cursor:'pointer' }}
        
       
        onClick={() => {navigate(`/detail/${data.idx}`, {state:{ data:data }})} }/>

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <TextMaxLine variant="h6" line={1} sx={{ cursor:'pointer' }} onClick={() => {navigate(`/detail/${data.idx}`, {state:{ data:data }})} }>
            {e_title}
        </TextMaxLine>
      </Stack>
    </m.div>
  );
}

MarketingCaseStudyItem.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    title: PropTypes.string,
  }),
};
