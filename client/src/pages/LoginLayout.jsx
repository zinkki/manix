import SideMenu from '../sections/_e-commerce/layout/account/EcommerceAccountMenu';
import { Routes, Route, Outlet } from 'react-router';
import AdminWrite from 'src/components/AdminWrite';
import AdminPFList from 'src/components/AdminPFList';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { LoadingButton } from '@mui/lab';
import { Stack, Typography, TextField } from '@mui/material';
import { bgGradient } from 'src/utils/cssStyles';
import FormProvider from 'src/components/hook-form';
import { alpha, styled } from '@mui/material/styles';
import AdminUpdate from 'src/components/AdminUpdate';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  display: 'flex',
  minHeight: '10vh',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 2),
}));

export default function LoginLayout() {

	const [adminStatus, setAdminStatus] = useState(false);

  return(
    <>
		<Routes>
			<Route path='/' element={<Login setAdminStatus={setAdminStatus}/> } />
			<Route path='write' element={<AdminWrite adminStatus={adminStatus}/> }/>
			<Route path='list' element={<AdminPFList adminStatus={adminStatus}/> } />
			<Route path='update' element={<AdminUpdate />} />
		</Routes>
    </>
    )
}

function Login(props) {

	const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [info, setInfo] = useState([{
    id:'',
    pw:'',
  }])
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    axios.get('/api/list')
      .then((res) => {
        setInfo(res.data[0]);
      })
      .catch( () => console.log('err....') )
  },[])

  const inputID = (e) => { setId(e.target.value) };
  const inputPW = (e) => { setPw(e.target.value) };

  const LoginSubmit = () => {
    if(info.id===id && info.pw===pw ) {
      setLoginStatus(true);
			props.setAdminStatus(true);
			navigate('/auth/write');
    } else { 
      alert('잘못된 계정정보!');
      setLoginStatus(false);
			props.setAdminStatus(false);
      return; 
    }
	}

	
	return(
	<>
	<StyledRoot/>
		<Stack
        spacing={4}
        sx={{
          p: 4,
          width: 1,
          mx: 'auto',
          flexShrink: 0,
          maxWidth: 400,
          borderRadius: 2,
          bgcolor: 'background.default',
          textAlign: { xs: 'center', md: 'left' },
          boxShadow: (theme) => theme.customShadows.z24,
        }}
      >
        <div>
          <Typography variant="h3" paragraph>
           Admin Login
          </Typography>
        </div>
        
        <FormProvider>
        {/* <AuthLoginForm /> */}
          <Stack spacing={2.5} alignItems="cemter">
            <TextField name="id" label="id" onChange={inputID} />
            <TextField name="password" label="password" type='password' onChange={inputPW} />
          </Stack>
          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            variant="contained"
            sx={{ mt:4 }}
            onClick={ LoginSubmit }
          >
            Login
          </LoadingButton>
				</FormProvider>

      </Stack>
		</>
	)
}