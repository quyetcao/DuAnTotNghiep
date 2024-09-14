import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Cập nhật với logo của các đối tác
const partners = [
    { name: 'VNExpress', logo: 'public/images/img_content/logo-vne.png' },
    { name: 'VTV', logo: 'public/images/img_content/logo-vtv.png' },
    { name: 'Cesti', logo: 'public/images/img_content/logo-cesti.png' },
    { name: 'Dân Trí', logo: 'public/images/img_content/logo-dantri.png' },
    { name: 'Tuổi Trẻ', logo: 'public/images/img_content/logo-tuoitre.png' },
    { name: 'FBNC', logo: 'public/images/img_content/logo-fbnc.png' },
];

export default function PartnersSection() {
    return (<Box mt={4}>
        <Typography variant="h5" gutterBottom fontWeight={500}>
            Vexere đã được nhắc đến trên
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
            {partners.map((partner, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                    <Box
                        component="img"
                        src={partner.logo}
                        alt={partner.name}
                        sx={{
                            width: '100%',    // Bạn có thể chỉnh lại theo tỉ lệ phần trăm
                            maxWidth: 150,     // Đặt maxWidth để giới hạn kích thước tối đa của logo
                            height: 'auto',    // Điều chỉnh chiều cao tự động theo tỉ lệ
                            mx: 'auto',        // Căn giữa logo
                            my: 4              // Khoảng cách dọc giữa logo và các phần tử khác
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>);
}