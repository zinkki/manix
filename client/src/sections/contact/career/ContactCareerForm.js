import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Container, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useState } from 'react';
//css
import '../../../utils/inputStyle.css';

// ----------------------------------------------------------------------

export default function ContactCareerForm() {
 
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [Msg, setMsg] = useState('');

  const inputName = (e) => { setName(e.target.value); }
  const inputEmail = (e) => { setMail(e.target.value); }
  const inputSubject = (e) => { setSubject(e.target.value); }
  const inputMsg = (e) => { setMsg(e.target.value); }


  const thankyou = () => {
    if(!name || !mail || !subject || !Msg) {
      setVisible(true);
      setTimeout(function() {
        setVisible(false);
      },2000)
      
    }
    else {
      setTimeout(function() { 
        setSuccess(true);
      },1000 );

      setTimeout(function() {
        setSuccess(false);
      }, 5000);
    }
  }

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
              <Typography
                variant="h2"
                style={{ fontFamily: 'Jamsil3' }}
                sx={{ fontSize: { xs: '32px', md: '50px', lg: '50px' } }}
              >
                CONTACT US
              </Typography>
            </Stack>

            <form
              //onSubmit={handleSubmit}
              target='iframe1'
              method="POST"
              data-email="amx_biz@auto-manix.com"
              action="https://script.google.com/macros/s/AKfycbyH2s36hqHZb_rspiVn0oAtm5xchBdhocW2irjuly47K-6CSClezx6BMaR5ymso3xN3/exec"
            >
              <Stack spacing={2.5}>
                <input 
                  style={{ height:'3rem',borderRadius:'10px',borderColor:'#e5e3e3' }} 
                  name="name" placeholder='Name' 
                  onChange={inputName} />
                <input 
                  style={{ height:'3rem',borderRadius:'10px',borderColor:'#e5e3e3' }} 
                  name="email" placeholder='Email'
                  onChange={inputEmail} />

                <input 
                  style={{ height:'3rem',borderRadius:'10px',borderColor:'#e5e3e3' }} 
                  name="phone_number" placeholder='PhoneNumber'
                  onChange={inputSubject} />

                <textarea 
                  style={{ borderRadius:'10px',borderColor:'#e5e3e3', rows:5 }} 
                  name="message" placeholder='Message' rows={4} 
                  sx={{ pb: 2.5 }} onChange={inputMsg} />

                <Stack alignItems="center" width={1}>
                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    color="inherit"
                    onClick={thankyou}
                  >
                    Send Message
                  </LoadingButton>

                  { visible === true ? ( <Typography variant='p' sx={{ pt:2, color:'red' }}>Fill in the required items!</Typography> ) : (null) }
                  { success === true ? ( <Typography variant='p' sx={{ pt:2 }}>Successful transmission!</Typography> ) : (null) }
                  
                  
                </Stack>
              </Stack>
            </form>

            <iframe id="iframe1" name="iframe1" style={{display:'none'}}></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
