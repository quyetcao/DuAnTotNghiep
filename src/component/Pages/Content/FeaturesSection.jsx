import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

// Cập nhật features với icon (đường dẫn đến icon)
const features = [
    {
        icon: 'public/images/img_content/bus-car-icon.svg', // Đường dẫn tới icon
        title: '2000+ nhà xe chất lượng cao',
        description: '500+ tuyến đường trên toàn quốc, đặt chuyến dễ dàng, tiện lợi cho di chuyển khắp nơi'
    },
    {
        icon: 'public/images/img_content/yellow-ticket-icon.svg',
        title: 'Đặt vé dễ dàng',
        description: 'Tích hợp nhiều phương thức thanh toán an toàn và thuận tiện'
    },
    {
        icon: 'public/images/img_content/completement-icon.svg',
        title: 'Chắc chắn có chỗ',
        description: 'Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển, mang đến hành trình trọn vẹn.'
    },
    {
        icon: 'public/images/img_content/coupon-icon.svg',
        title: 'Nhiều ưu đãi',
        description: 'Hiện có rất nhiều chương trình ưu đãi cực kỳ hấp dẫn từ các đối tác của chúng tôi'
    }
];

export default function FeaturesSection() {
    return (<Box mt={4} >
        <Typography variant="h5" gutterBottom fontWeight={500}>
            Nền tảng kết nối người dùng và nhà xe
        </Typography>
        <Grid
            container
            spacing={2}
            justifyContent="center"
        >
            {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        textAlign="left"
                        color="black"
                        padding={2}
                        border="1px solid #e0e0e0"
                        borderRadius={2}
                        backgroundColor="white"
                        height="100%"
                    >
                        {/* Icon và Title */}
                        <Box display="flex" alignItems="center" mb={1}>
                            <Box mr={2}>
                                <img src={feature.icon} alt={feature.title} style={{ width: '50px', height: '50px' }} />
                            </Box>
                            <Typography variant="h6" gutterBottom>
                                {feature.title}
                            </Typography>
                        </Box>
                        {/* Description */}
                        <Typography variant="body2" style={{ marginTop: '8px' }}>
                            {feature.description}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>);
}
