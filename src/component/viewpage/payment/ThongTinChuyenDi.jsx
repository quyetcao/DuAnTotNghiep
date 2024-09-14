import React from "react";
import { Box, Typography } from "@mui/material";

function ThongTinChuyenDi() {
    return (
        <Box sx={{ mt: 2, padding: 2, border: "1px solid #ccc", borderRadius: "8px" }}>
            <Typography variant="h6">Thông tin chuyến đi</Typography>
            <Box>
                <Typography>Ngày: 12/09/2024</Typography>
                <Typography>Xe: Limousine giường nằm 34 chỗ</Typography>
                <Typography>Thời gian đi: 19:30 - 06:00</Typography>
            </Box>
        </Box>
    );
}

export default ThongTinChuyenDi;
