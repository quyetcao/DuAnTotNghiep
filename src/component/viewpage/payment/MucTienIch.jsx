import React from 'react';
import { Box, Typography, Checkbox, Grid, Button } from '@mui/material';

function MucTienIch() {
    return (
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px', maxWidth: 500, margin: 'auto', mt: 3 }}>
            {/* Tiêu đề tiện ích */}
            <Typography variant="h6" sx={{ mb: 2 }}>
                Tiện ích
            </Typography>

            {/* Nội dung tiện ích */}
            <Box>
                <Typography sx={{ mb: 1 }}>
                    <Checkbox />
                    Bảo hiểm chuyến đi (+20.000đ/ghế)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    Được bồi thường lên đến 400.000.000đ/ghế. Cung cấp bởi BAOVIET và Saladin.
                </Typography>

                {/* Thông tin thêm */}
                <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: '8px' }}>
                    <Typography sx={{ mb: 1 }}>Bảo hiểm tai nạn</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn.
                    </Typography>
                    <Typography>Bảo hiểm hủy chuyến</Typography>
                    <Typography variant="body2">
                        Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lý do khách quan.
                    </Typography>
                </Box>

                {/* Nút xem chi tiết */}
                <Button variant="contained" color="success" sx={{ mt: 2 }}>
                    Chi tiết
                </Button>
            </Box>
        </Box>
    );
}

export default MucTienIch;
