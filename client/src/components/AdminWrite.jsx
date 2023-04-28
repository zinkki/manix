import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, Stack, TextField, InputAdornment, Button } from '@mui/material';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { EcommerceAccountLayout } from '../sections/_e-commerce/layout';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function AdminWrite(props) {
  const navigate = useNavigate();
  const BucketName = 'auto-manix.com';
  const Region = process.env.REACT_APP_AWS_REGION;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: BucketName },
    region: Region,
  });

  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [selectedFile5, setSelectedFile5] = useState(null);

  const [uploadPath, setUploadPath] = useState('');

  const [progress, setProgress] = useState(0);

  const handleFileInput1 = (e) => {
    setSelectedFile1(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split('fakepath\\');
    console.log(imgname[1]);
    setPic1(imgname[1]);
  };
  const handleFileInput2 = (e) => {
    setSelectedFile2(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split('fakepath\\');
    console.log(imgname[1]);
    setPic2(imgname[1]);
  };
  const handleFileInput3 = (e) => {
    setSelectedFile3(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split('fakepath\\');
    console.log(imgname[1]);
    setPic3(imgname[1]);
  };
  const handleFileInput4 = (e) => {
    setSelectedFile4(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split('fakepath\\');
    console.log(imgname[1]);
    setPic4(imgname[1]);
  };
  const handleFileInput5 = (e) => {
    setSelectedFile5(e.target.files[0]);
    var str = e.target.value;
    var imgname = str.split('fakepath\\');
    console.log(imgname[1]);
    setPic5(imgname[1]);
  };

  const uploadFile = (file) => {
    
    if (!file || !title) {
      alert('파일을 선택해주세요!(이벤트 제목 비었는지 확인)');
      return;
    }
    
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: BucketName,
      Key: `${title}/${file.name}`,
      ContentType: 'image/jpeg',
      ContentDisposition: 'inline',
      CacheControl: 'no-cache',
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.load / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
        else {
          console.log(params.Key);
        }
      });
  };


  const [title, setTitle] = useState(''); //제목
	const [date, setDate] = useState(''); //날짜
	const [sub_title1, setSub_title1] = useState('');
	const [sub_contents1, setSub_contents1] = useState('');
	const [sub_title2, setSub_title2] = useState('');
	const [sub_contents2, setSub_contents2] = useState('');
	const [sub_title3, setSub_title3] = useState('');
	const [sub_contents3, setSub_contents3] = useState('');
	const [sub_title4, setSub_title4] = useState('');
	const [sub_contents4, setSub_contents4] = useState('');
	const [sub_title5, setSub_title5] = useState('');
	const [sub_contents5, setSub_contents5] = useState('');
  const [sub_link_title, setSub_link_title] = useState('');
  const [sub_link_adrs, setSub_link_adrs] = useState('');
	const [pic1, setPic1] = useState('');
  const [pic2, setPic2] = useState('');
  const [pic3, setPic3] = useState('');
  const [pic4, setPic4] = useState('');
  const [pic5, setPic5] = useState('');
	const [contents, setContents] = useState('');

  const inputTitle = (e) => { setTitle(e.target.value) };
	const inputDate = (e) => { setDate(e.target.value) };
	const inputSubTitle1 = (e) => { setSub_title1(e.target.value) };
	const inputSubContents1 = (e) => { setSub_contents1(e.target.value) };
	const inputSubTitle2 = (e) => { setSub_title2(e.target.value) };
	const inputSubContents2 = (e) => { setSub_contents2(e.target.value) };
	const inputSubTitle3 = (e) => { setSub_title3(e.target.value) };
	const inputSubContents3 = (e) => { setSub_contents3(e.target.value) };
	const inputSubTitle4 = (e) => { setSub_title4(e.target.value) };
	const inputSubContents4 = (e) => { setSub_contents4(e.target.value) };
	const inputSubTitle5 = (e) => { setSub_title5(e.target.value) };
	const inputSubContents5 = (e) => { setSub_contents5(e.target.value) };
	const inputContents = (e) => { setContents(e.target.value) };
  const inputLinkTitle = (e) => { setSub_link_title(e.target.value); }
  const inputLinkAdrs = (e) => { setSub_link_adrs(e.target.value); }

  const insertPortfolio = () => {
    if(!title || !date || !sub_title1
      || !sub_contents1 || !pic1 || !pic2 ||
       !pic3 || !pic4 || !pic5 || !contents ){ alert('빈칸을 확인하세요'); return; }
    else {
    axios
      .post('/api/insertPortfolio', {
        title : title,
				date : date,
				sub_title1 : sub_title1,
				sub_contents1 : sub_contents1,
				sub_title2 : sub_title2,
				sub_contents2 : sub_contents2,
				sub_title3 : sub_title3,
				sub_contents3 : sub_contents3,
				sub_title4 : sub_title4,
				sub_contents4 : sub_contents4,
				sub_title5 : sub_title5,
				sub_contents5 : sub_contents5,
        sub_link_title : sub_link_title,
        sub_link_adrs : sub_link_adrs,
				pic1 : pic1,
				pic2 : pic2,
				pic3: pic3,
				pic4 : pic4,
				pic5 : pic5,
				contents : contents,
      })
      .then(() => {
        console.log('success....');
        alert('업로드완료!');
        navigate('/');
      })
      .catch(() => console.log('err....'));
    }
  };
  const methods = useForm({});
  return (
    <>
    { props.adminStatus===true ? (<>
      <EcommerceAccountLayout>
        <FormProvider methods={methods}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Portfolio 작성 폼
          </Typography>
					<Stack spacing={1}>
            <TextField onChange={inputTitle} name="title" label="이벤트 제목"/>
						<TextField onChange={inputDate} name='date' label='이벤트 날짜' />
						<Box rowGap={1} columnGap={1} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
							<TextField onChange={inputSubTitle1} name='sub_title1' label='서브 제목1' />
							<TextField onChange={inputSubContents1} name='sub_contents1' label='서브 내용1' />
							<TextField onChange={inputSubTitle2} name='sub_title2' label='서브 제목2' />
							<TextField onChange={inputSubContents2} name='sub_contents2' label='서브 내용2' />
							<TextField onChange={inputSubTitle3} name='sub_title3' label='서브 제목3' />
							<TextField onChange={inputSubContents3} name='sub_contents3' label='서브 내용3' />
							<TextField onChange={inputSubTitle4} name='sub_title4' label='서브 제목4' />
							<TextField onChange={inputSubContents4} name='sub_contents4' label='서브 내용4' />
							<TextField onChange={inputSubTitle5} name='sub_title5' label='서브 제목5' />
							<TextField onChange={inputSubContents5} name='sub_contents5' label='서브 내용5' />
              <TextField onChange={inputLinkTitle} name='sub_link_title' label='링크가 있다면?링크 타이틀입력' />
              <TextField onChange={inputLinkAdrs} name='sub_link_adrs' label='링크 주소 입력' />
							<TextField
              type="file"
							name='pic1'
              label="메인사진1"
              onChange={handleFileInput1}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => uploadFile(selectedFile1,title)}
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
            <TextField
              type="file"
              label="사진2"
							name='pic2'
              onChange={handleFileInput2}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => uploadFile(selectedFile2)}
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
            <TextField
              type="file"
              label="사진3"
							name='pic3'
              onChange={handleFileInput3}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => uploadFile(selectedFile3)}
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
            <TextField
              type="file"
              label="사진4"
							name='pic4'
              onChange={handleFileInput4}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => uploadFile(selectedFile4)}
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
            <TextField
              type="file"
              label="사진5"
							name='pic5'
              onChange={handleFileInput5}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => uploadFile(selectedFile5)}
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
						<RHFTextField onChange={inputContents} name="contents" multiline rows={4} label="내용" sx={{ pb: 2.5 }} />
          </Stack>

          <LoadingButton color="inherit" size="large" variant="contained" onClick={insertPortfolio}>
            Save Changes
          </LoadingButton>
        </FormProvider>
      </EcommerceAccountLayout>
    </>) : (null) }
      
    </>
  );
}
