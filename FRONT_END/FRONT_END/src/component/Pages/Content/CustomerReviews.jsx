import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const reviews = [
    {
        name: 'Anh Nguyễn Tuấn Quỳnh',
        title: 'CEO Saigon Books',
        image: '../../images/img_content/testimonial-quynh.jpg',
        content: 'Lần trước tôi có việc gấp phải đi công tác, lên mạng tìm đặt vé xe thì tình cờ tìm thấy Vexere. Sau khi tham khảo, tôi quyết định đặt vé và thanh toán. Công nhận rất tiện và nhanh chóng. Chỉ một lúc sau, nhà xe liên hệ xác nhận vé ngay và thông báo thời gian xe dự kiến đón để tôi chuẩn bị. Tôi khá bất ngờ vì nhà xe có thông tin của mình nhanh đến vậy. Chuyến đi hôm đó rất tuyệt. Tôi nhất định sẽ tiếp tục ủng hộ Vexere.'
    },
    {
        name: 'Shark Phi',
        title: 'Giám đốc BSSC',
        image: '../../images/img_content/testimonial-phi.jpg',
        content: 'Các đối tác của Vexere đều là những hãng xe lớn, có uy tín nên tôi hoàn toàn yên tâm khi lựa chọn đặt vé cho bản thân và gia đình. Nhờ hiển thị rõ nhà xe và vị trí chỗ trống trên xe, tôi rất dễ dàng tìm chuyến mình muốn và chỗ mình muốn ngồi. Còn hình thức thanh toán có cả thẻ, ví, tại nhà xe và tốc độ thanh toán thì siêu nhanh, tiết kiệm cho tôi rất nhiều thời gian.'
    },
    {
        name: 'Chị Tú Ngô',
        title: 'YOLA Co-Founder',
        image: '../../images/img_content/testimonial-tu-ngo.jpg',
        content: 'Vexere là ứng dụng đầu tiên tôi nghĩ tới khi cần đặt vé xe. Vì không những Vexere có nhiều ưu đãi lớn mà còn có nhiều hãng xe chất lượng, tôi được tuỳ chọn chỗ yêu thích nên tôi rất hài lòng.'

    },
    {
        name: 'Bữu Vi Vu',
        title: 'Travel tiktoker',
        image: '../../images/img_content/testimonial-buuvivu.jpg',
        content: 'Tôi thường chọn đặt vé tại Vexere mỗi khi du lịch cùng người thân, bạn bè. Bên cạnh việc đặt vé nhanh chóng, thuận tiện, Vexere còn có các đợt Flashsale định kỳ lên đến 50%. Săn vé thành công vào các dịp này giúp tôi tiết kiệm đáng kể chi phí đi lại cho mỗi chuyến đi.'
    }
];

export default function CustomerReviews() {
    return (<Box mt={4}>
        <Typography variant="h5" gutterBottom fontWeight={500}>
            Khách hàng nói gì về Vexere
        </Typography>
        <Grid container spacing={2}>
            {reviews.map((review, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Avatar src={review.image} alt={review.name} />
                                <Box ml={2}>
                                    <Typography variant="h6">{review.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.title}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1">{review.content}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>);
}