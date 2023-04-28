import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, Stack, TextField, InputAdornment, Button } from '@mui/material';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { EcommerceAccountLayout } from 'src/sections/_e-commerce/layout';
import axios from 'axios';
import { useLocation } from 'react-router';

export default function AdminUpdate() {
	const location = useLocation();
	const idx = location.state.idx;

	const [data, setData] = useState('');

	useEffect(() => {
		axios.get('/api/idxList',{ params: {'idx':idx} } )
			.then((res) => {
				setData(res.data[0]);
			})
			.catch( ()=> { console.log('err....') } )
	},[])
	
	const methods = useForm({});

	const [title, setTitle] = useState(data.e_title); //제목
	const [date, setDate] = useState(data.e_date); //날짜
	const [sub_title1, setSub_title1] = useState(data.sub_title1);
	const [sub_contents1, setSub_contents1] = useState(data.sub_contents1);
	const [sub_title2, setSub_title2] = useState(data.sub_title2);
	const [sub_contents2, setSub_contents2] = useState(data.sub_contents2);
	const [sub_title3, setSub_title3] = useState(data.sub_title3);
	const [sub_contents3, setSub_contents3] = useState(data.sub_contents3);
	const [sub_title4, setSub_title4] = useState(data.sub_title4);
	const [sub_contents4, setSub_contents4] = useState(data.sub_contents4);
	const [sub_title5, setSub_title5] = useState(data.sub_title5);
	const [sub_contents5, setSub_contents5] = useState(data.sub_contents5);
	
	const [contents, setContents] = useState('');

	const inputTitle = (e) => { setTitle(e.target.value); };
	const inputDate = (e) => { setDate(e.target.value); };
	const inputSubTitle1 = (e) => { setSub_title1(e.target.value);};
	const inputSubContents1 = (e) => { setSub_contents1(e.target.value); };
	const inputSubTitle2 = (e) => { setSub_title2(e.target.value) };
	const inputSubContents2 = (e) => { setSub_contents2(e.target.value) };
	const inputSubTitle3 = (e) => { setSub_title3(e.target.value) };
	const inputSubContents3 = (e) => { setSub_contents3(e.target.value) };
	const inputSubTitle4 = (e) => { setSub_title4(e.target.value) };
	const inputSubContents4 = (e) => { setSub_contents4(e.target.value) };
	const inputSubTitle5 = (e) => { setSub_title5(e.target.value) };
	const inputSubContents5 = (e) => { setSub_contents5(e.target.value) };
	const inputContents = (e) => { setContents(e.target.value) };

	const updatePortfolio = () => {
		if(!date || !sub_title1
      || !sub_contents1 || !contents ){ alert('빈칸을 확인하세요'); return; }
		axios.post('/api/updatePortfolio', {
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
			contents : contents,
			idx: idx,
		})
		.then(() => {
			console.log('update--success');
			alert('수정완료');
		})
		.catch(() => { console.log('err...') })
	}

	useEffect(()=> {
		if(!inputSubTitle1){
			console.log('not change..')
		}
	},[])

  return(
    <>
		<EcommerceAccountLayout>
        <FormProvider methods={methods}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Portfolio 작성 폼
          </Typography>
					<Stack spacing={1}>
            <RHFTextField disabled onChange={inputTitle} name="title" value={data.e_title} multiline>{data.e_title}</RHFTextField>
						<RHFTextField onChange={inputDate} name='date' defaultValue={data.e_date} multiline />
						<Box rowGap={1} columnGap={1} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
							<RHFTextField onChange={inputSubTitle1} name="sub_title1" defaultValue={data.sub_title1} multiline />
							<TextField onChange={inputSubContents1} name="sub_contents1" defaultValue={data.sub_contents1} multiline /> 
							<TextField onChange={inputSubTitle2} name="sub_title2" defaultValue={data.sub_title2} multiline /> 
							<TextField onChange={inputSubContents2} name='sub_contents2' defaultValue={data.sub_contents2} multiline />
							<TextField onChange={inputSubTitle3} name='sub_title3' defaultValue={data.sub_title3} multiline />
							<TextField onChange={inputSubContents3} name='sub_contents3' defaultValue={data.sub_contents3} multiline />
							<TextField onChange={inputSubTitle4} name='sub_title4' defaultValue={data.sub_title4} multiline />
							<TextField onChange={inputSubContents4} name='sub_contents4' defaultValue={data.sub_contents4} multiline />
							<TextField onChange={inputSubTitle5} name='sub_title5' defaultValue={data.sub_title5} multiline />
							<TextField onChange={inputSubContents5} name='sub_contents5' defaultValue={data.sub_contents5} multiline />
						</Box>
						<RHFTextField onChange={inputContents} name="contents" multiline rows={4} defaultValue={data.e_contents} sx={{ pb: 2.5 }} />
          </Stack>

          <LoadingButton color="inherit" size="large" variant="contained" onClick={updatePortfolio}>
            Save Changes
          </LoadingButton>
        </FormProvider>
      </EcommerceAccountLayout>
    </>
  )
}