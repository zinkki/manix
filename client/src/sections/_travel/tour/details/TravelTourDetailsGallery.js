import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
// components
import Image from 'src/components/image';
import Lightbox, { useLightBox } from 'src/components/lightbox';
import { varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function TravelTourDetailsGallery({ images, data }) {
  
  const { e_title, pic1, pic2, pic3, pic4, pic5} = data;
  const url1 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic1}`;
  const url2 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic2}`;
  const url3 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic3}`;
  const url4 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic4}`;
  const url5 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/${e_title}/${pic5}`;

  // const slides = images.map((slide) => ({
  //   src: slide,
  // }));

  // const {
  //   selected: selectedImage,
  //   open: openLightbox,
  //   onOpen: handleOpenLightbox,
  //   onClose: handleCloseLightbox,
  // } = useLightBox(slides);

  // const onOpenLightbox = () => {
  //   handleOpenLightbox(slides[0].src);
  // }

  return (
    <>
      <Box
        sx={{
          gap: 1,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
          mb: { xs: 5, md: 10 },
        }}
      >
        {/* <PhotoItem data={data} photo={slides[0].src} onOpenLightbox={() => handleOpenLightbox(slides[0].src)} /> */}
        <m.div
          // whileHover="hover"
          variants={{
          hover: { opacity: 0.8 },
          }}
          transition={varTranHover()}
        >
          <Image
            alt="photo"
            src={url1}
            ratio="1/1"
            // onClick={onOpenLightbox}
            sx={{ borderRadius: 2 }}
          />
        </m.div>

        <Box
          sx={{
            gap: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <m.div
            // whileHover="hover"
            variants={{
              hover: { opacity: 0.8 },
            }}
            transition={varTranHover()}
          >
            <Image
              alt="photo"
              src={url2}
              ratio="1/1"
              // onClick={onOpenLightbox}
              sx={{ borderRadius: 2 }}
            />
          </m.div>
          <m.div
            // whileHover="hover"
            variants={{
              hover: { opacity: 0.8 },
            }}
            transition={varTranHover()}
          >
            <Image
              alt="photo"
              src={url3}
              ratio="1/1"
              // onClick={onOpenLightbox}
              sx={{ borderRadius: 2 }}
            />
          </m.div>
          <m.div
            // whileHover="hover"
            variants={{
              hover: { opacity: 0.8 },
            }}
            transition={varTranHover()}
          >
            <Image
              alt="photo"
              src={url4}
              ratio="1/1"
              // onClick={onOpenLightbox}
              sx={{ borderRadius: 2, }}
            />
          </m.div>
          <m.div
            // whileHover="hover"
            variants={{
              hover: { opacity: 0.8 },
            }}
            transition={varTranHover()}
          >
            <Image
              alt="photo"
              src={url5}
              ratio="1/1"
              // onClick={onOpenLightbox}
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Box>
      </Box>

      {/* <Lightbox
        index={selectedImage}
        slides={slides}
        open={openLightbox}
        close={handleCloseLightbox}
      /> */}
    </>
  );
}

TravelTourDetailsGallery.propTypes = {
  images: PropTypes.array,
};

