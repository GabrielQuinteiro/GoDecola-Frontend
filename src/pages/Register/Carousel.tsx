import { Box } from "@mui/material";
import Slider from "react-slick";
import { styled } from '@mui/material/styles';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

const StyledSlider = styled(Slider)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& .slick-list, & .slick-track, & .slick-slide, & .slick-slide > div': {
    height: '100%',
  },
  '& .slick-dots': {
    bottom: '20px',
    '& li button:before': {
      color: theme.palette.common.white,
      fontSize: '12px',
    },
    '& li.slick-active button:before': {
      opacity: 1,
      color: theme.palette.primary.main,
    },
  },
}));

const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box sx={(theme) => ({
      width: 538,
      height: 816,
      overflow: "hidden",
      borderRadius: theme.shape.borderRadius,
    })}>
      <StyledSlider {...settings}>
        <div>
          <CarouselImage src={slide1} alt="slide1" />
        </div>
        <div>
          <CarouselImage src={slide2} alt="slide2" />
        </div>
        <div>
          <CarouselImage src={slide3} alt="slide3" />
        </div>
      </StyledSlider>
    </Box>
  );
}