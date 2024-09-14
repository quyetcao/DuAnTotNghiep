import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const stations = [
    { name: 'Bến xe Miền Đông', image: 'public/images/img_content/ben-xe-mien-dong.jpg' },
    { name: 'Bến xe Đà Nẵng', image: 'public/images/img_content/benxe-da-nang.png' },
    { name: 'Bến xe Đà Lạt', image: 'public/images/img_content/ben-xe-da-lat.png' },
    { name: 'Bến xe Mỹ Đình', image: 'public/images/img_content/benxe-my-dinh.jpeg' }
];

export default function StationsSection() {
    return (<Box mt={1}>
        <Typography variant="h5" gutterBottom fontWeight={500}>
            Bến xe khách
        </Typography>
        <Grid container spacing={4} justifyContent="center" >
            {stations.map((station, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box position="relative" height={200} sx={{ overflow: 'hidden' }}>
                        <img src={station.image} alt={station.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                position: 'absolute',
                                bottom: 10, // Điều chỉnh khoảng cách từ dưới lên
                                left: '35%', // Căn giữa theo chiều ngang
                                transform: 'translateX(-28%)', // Giữ chữ giữa chính xác
                                color: 'white', // Màu chữ
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền đen mờ cho chữ
                                padding: '4px 8px', // Đệm cho khung chữ
                                borderRadius: '5px', // Bo góc cho khung chữ
                                fontSize: '18px',
                                fontWeight: '500'
                            }}
                        >
                            {station.name}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>);
}