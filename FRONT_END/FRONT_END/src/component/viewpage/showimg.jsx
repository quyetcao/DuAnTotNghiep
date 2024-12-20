
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const MyGallery = (infobus) => {
    const images = infobus?.infobus?.car_images || [];
console.log(images);
   
    return (
        <ImageList sx={{ width: 500, height:'auto' }} cols={4} rowHeight={165}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`http://127.0.0.1:8000/images/cars/${item?.image}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
           
    );
};

export default MyGallery;
