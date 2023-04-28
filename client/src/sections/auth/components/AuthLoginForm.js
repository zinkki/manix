import { useForm } from 'react-hook-form';
import { useState } from 'react';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, IconButton, InputAdornment } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);


  const LoginSubmit = () => {
    console.log('aaaa');
  }


  const methods = useForm({
   
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormProvider methods={methods}>
      <Stack spacing={2.5} alignItems="flex-end">
        <RHFTextField name="id" label="id" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          // onClick={() => navigate('/admin/write', { state:{ loginStatus : loginStatus } }) }
          onClick={() => LoginSubmit }
        >
          Login
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
