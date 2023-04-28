import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// @mui
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  IconButton,
  TableHead
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import { EcommerceAccountLayout } from '../layout';
import axios from 'axios';

export default function EcommerceAccountOrdersPage() {

  const navigate = useNavigate(); 

  const [pofo, setPofo] = useState([{
    idx:0,
    e_title:'',
    e_date:'',
  }]) 

  useEffect(() => {
    axios.get('/api/adminList')
    .then((res) => {
      setPofo(res.data);
      console.log('axios success...');
    })
    .catch(() => console.log('err.....'))
  },[])

  const deletePofo = (idx) => {
    axios.post('/api/deletePofo', { idx:idx })
    .then(() => {
      console.log('delete success....');
      alert('삭제 되었습니다!');
        axios.get('/api/adminList')
        .then((res) => {
          setPofo(res.data);
        })
    })
    .catch(() => { console.log('err') })
  }

  return (
    <EcommerceAccountLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Portfolio 리스트
      </Typography>

      <TableContainer
        sx={{
          overflow: 'unset',
          '& .MuiTableCell-head': {
            color: 'text.primary',
          },
          '& .MuiTableCell-root': {
            bgcolor: 'background.default',
            borderBottomColor: (theme) => theme.palette.divider,
          },
        }}
      >

        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>idx</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>작성 일자&시간</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {pofo.length > 0 ? 
                (<>
                {pofo.map((pofo,i) => (
                  <TableRow hover key={i} pofo={pofo[i]}>
                    <TableCell>{pofo.idx}</TableCell>
                    <TableCell 
                        //onClick={() => { navigate('/auth/update', {state: { idx: pofo.idx }}) } }
                    >{pofo.e_title}</TableCell>
                    <TableCell>{pofo.write_stamp}</TableCell>
                    <TableCell align="center" padding="none">
                      <IconButton onClick={() => deletePofo(pofo.idx)}>
                        <Iconify icon="carbon:trash-can"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                </>)
              :
              null
              }
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    
    </EcommerceAccountLayout>
  );
}
