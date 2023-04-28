import { useState } from 'react';
import AWS from 'aws-sdk';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers';
import { Box, Typography, Stack, TextField, InputAdornment,Button} from '@mui/material';
// assets
// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';
//
import { EcommerceAccountLayout } from '../layout';
import { start } from 'nprogress';
import axios from 'axios';


export default function EcommerceAccountPersonalView() {

  const BucketName = 'auto-manix.com'
	const Region = process.env.REACT_APP_AWS_REGION;
	
	AWS.config.update({
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
	})

	const myBucket = new AWS.S3({
		params: { Bucket : BucketName},
		region: Region
	})

	const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [selectedFile5, setSelectedFile5] = useState(null);

	const [progress, setProgress] = useState(0);

  const handleFileInput1 = (e) => {
		setSelectedFile1(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split("fakepath\\");
    console.log(imgname[1]);
    setPic1(imgname[1]);
	}
  const handleFileInput2 = (e) => {
		setSelectedFile2(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split("fakepath\\");
    console.log(imgname[1]);
    setPic2(imgname[1]);
	}
  const handleFileInput3 = (e) => {
		setSelectedFile3(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split("fakepath\\");
    console.log(imgname[1]);
    setPic3(imgname[1]);
	}
  const handleFileInput4 = (e) => {
		setSelectedFile4(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split("fakepath\\");
    console.log(imgname[1]);
    setPic4(imgname[1]);
	}
  const handleFileInput5 = (e) => {
		setSelectedFile5(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split("fakepath\\");
    console.log(imgname[1]);
    setPic5(imgname[1]);
	}

  const uploadFile = (file) => {
		if(!file) {
			alert('파일을 선택해주세요!');
			return;
		}
		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: BucketName,
			Key: file.name,
			ContentType: 'image/jpeg',
			ContentDisposition:"inline",
			CacheControl: "no-cache"
		};

		myBucket.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.load / evt.total)*100))
			})
			.send((err) => {
				if(err) console.log(err);
				else {
					console.log(params.Key);
				}
			})
	}

  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [location, setLocation] = useState('');
  const [platform, setPlatform] = useState('');
  const [who, setWho] = useState('');
  const [work, setWork] = useState('');
  const [pic1, setPic1] = useState('');
  const [pic2, setPic2] = useState('');
  const [pic3, setPic3] = useState('');
  const [pic4, setPic4] = useState('');
  const [pic5, setPic5] = useState('');
  const [contents, setContents] = useState('');


  const inputTitle = (e) => {
    setTitle(e.target.value);
  }
  const inputClient = (e) => {
    setClient(e.target.value);
  }
  const inputStart = (e) => {
    setStart(e.target.value);
  }
  const inputEnd = (e) => {
    setEnd(e.target.value);
  }
  const inputLocation = (e) => {
    setLocation(e.target.value);
  }
  const inputPlatform = (e) => {
    setPlatform(e.target.value);
  }
  const inputWho = (e) => {
    setWho(e.target.value);
  }
  const inputWork = (e) => {
    setWork(e.target.value);
  }
  const inputContents = (e) => {
    setContents(e.target.value);
  }

  const insertPortfolio = () => {
    axios.post('/api/insertPortfolio', { 
      title:title, client:client, start:start, end:end, 
      location:location, platform:platform, who:who, work:work,
      pic1: pic1, pic2:pic2, pic3:pic3, pic4:pic4, pic5:pic5,
      contents:contents })
      .then(() => {
        console.log('success....');
        alert('업로드완료!');
      })
      .catch(() => console.log("err...."));
  }

  const methods = useForm({
  });

  return (
    <EcommerceAccountLayout>
      <FormProvider methods={methods}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Portfolio 작성 폼
        </Typography>

        <Box
          rowGap={2.5}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <TextField onChange={inputTitle} name="title" label="이벤트 제목" />
          <TextField onChange={inputClient} name="client" label="클라이언트" />
          <TextField onChange={inputStart} name="startDate" label="이벤트 시작일" />
          <TextField onChange={inputEnd} name="endDate" label="이벤트 종료일" />
          <TextField onChange={inputLocation} name="location" label="장소" />
          <TextField onChange={inputPlatform} name="platform" label="대회 플랫폼" />
          <TextField onChange={inputWho} name="who" label="이벤트 대상" />
          <TextField onChange={inputWork} name="work" label="담당업무" />
          
          <TextField type="file" label="메인사진1"
            onChange={(handleFileInput1)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={()=>uploadFile(selectedFile1)}
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    upload
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'background.neutral',
                '&:hover, &.Mui-focused': {
                  bgcolor: '#edeff1',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
          <TextField type="file" label="사진2"
            onChange={(handleFileInput2)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={()=>uploadFile(selectedFile2)}
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    upload
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'background.neutral',
                '&:hover, &.Mui-focused': {
                  bgcolor: '#edeff1',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
          <TextField type="file" label="사진3"
            onChange={(handleFileInput3)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={()=>uploadFile(selectedFile3)}
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    upload
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'background.neutral',
                '&:hover, &.Mui-focused': {
                  bgcolor: '#edeff1',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
          <TextField type="file" label="사진4"
            onChange={(handleFileInput4)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={()=>uploadFile(selectedFile4)}
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    upload
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'background.neutral',
                '&:hover, &.Mui-focused': {
                  bgcolor: '#edeff1',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
          <TextField type="file" label="사진5"
            onChange={(handleFileInput5)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={()=>uploadFile(selectedFile5)}
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    upload
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'background.neutral',
                '&:hover, &.Mui-focused': {
                  bgcolor: '#edeff1',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
          
        </Box>

        <Stack spacing={3} sx={{ my: 5 }}>
          <RHFTextField onChange={inputContents} name="desc" multiline rows={4} label="내용" sx={{ pb: 2.5 }} />
        </Stack>

        <LoadingButton
          color="inherit"
          size="large"
          variant="contained"
          onClick={insertPortfolio}
        >
          Save Changes
        </LoadingButton>
      </FormProvider>
    </EcommerceAccountLayout>
  );
}
