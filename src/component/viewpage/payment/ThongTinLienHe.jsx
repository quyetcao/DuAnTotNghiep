import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ThongTinLienHe() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({
            ...contactInfo,
            [name]: value
        });
    };

    return (
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px', maxWidth: 500, margin: 'auto', background: '#fff', }}>
            {/* Phần đăng nhập */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                    Đăng nhập
                </Button>
            </Box>

            {/* Tiêu đề */}
            <Typography variant="h6" sx={{ mb: 2 }}>
                Thông tin liên hệ
            </Typography>

            {/* Form liên hệ */}
            <Grid container spacing={2}>
                {/* Tên người đi */}
                <Grid item xs={12}>
                    <TextField
                        label="Tên người đi"
                        name="name"
                        value={contactInfo.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Số điện thoại */}
                <Grid item xs={12}>
                    <TextField
                        label="Số điện thoại"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    VN +84
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        label="Email để nhận thông tin đặt chỗ"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>

            {/* Thông báo */}
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', backgroundColor: '#e8f5e9', padding: 1, borderRadius: '4px' }}>
                <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body2">
                    Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và liên hệ khi cần thiết.
                </Typography>
            </Box>
        </Box>
    );
}

export default ThongTinLienHe;
