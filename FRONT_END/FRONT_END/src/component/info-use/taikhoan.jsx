import { Outlet } from 'react-router-dom';
import LayoutPageTaiKhoan from './layout-page-tk';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Taikhoan() {
    const breadcrumbs = [
        <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
            Trang chủ
        </Link>,
        <Link
            underline='hover'
            key='2'
            color='inherit'
            href='/material-ui/getting-started/installation/'
            onClick={handleClick}
        >
            Tài khoản
        </Link>,
        <Typography key='3' sx={{ color: 'text.primary' }}>
            Thông tin tài khoản
        </Typography>,
    ];

    return (
        <>
            <div className='breadcrumbs-container'>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize='small' />}
                    aria-label='breadcrumb'
                    sx={{ marginTop: '20px', paddingLeft: '165px' }}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <LayoutPageTaiKhoan />
                </Grid>
                <Grid item xs={8}>
                    <Outlet></Outlet>
                </Grid>
            </Grid>
        </>
    );
}
