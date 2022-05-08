import { useState, useEffect } from "react";

import {
  Box,
  Slide,
  Button,
  Card,
  CardMedia,
  Stack,
  Icon,
} from "@mui/material";

import Latte from "../../assets/latte.jpg";
import Macchiato from "../../assets/macchiato.jpg";
import Moka from "../../assets/moka.jpg";

const prepareImagesArray = (imgsArray) => {
  const array = [];

  imgsArray.map((img) => array.push({ show: false, img: img }));
  array[0].show = true;

  console.log(array);

  return array;
};

function Carousel({ height, width = "100%", padding = "0", imgsArray }) {
  const [dir, setDir] = useState(true);
  const [imgs, setImgs] = useState([
    /*
    {
      show: true,
      img: Latte,
    },
    {
      show: false,
      img: Macchiato,
    },
    {
      show: false,
      img: Moka,
    },*/
  ]);

  useEffect(() => {
    console.log(imgsArray);
    setImgs(prepareImagesArray(imgsArray));
  }, []);

  const handleNext = () => {
    var array = [...imgs];
    for (let i = 0; i < array.length; i++) {
      if (array[i].show === true) {
        array[i].show = false;

        if (i + 1 === array.length) array[0].show = true;
        else array[i + 1].show = true;

        setImgs(array);
        break;
      }
    }
    setDir(true); //left
  };

  const handlePrev = () => {
    var array = [...imgs];
    for (let i = array.length - 1; i > -1; i--) {
      if (array[i].show === true) {
        array[i].show = false;

        if (i - 1 === -1) array[array.length - 1].show = true;
        else array[i - 1].show = true;

        setImgs(array);
        break;
      }
    }
    setDir(false); //right
  };

  const slideDir = (isShow) => {
    if (isShow) {
      if (dir) return "left";
      else return "right";
    } else {
      if (dir) return "right";
      else return "left";
    }
  };

  return (
    <Box position="relative">
      <Box position="absolute" zIndex="1" left="30%" top="80%">
        <Button onClick={handlePrev} sx={{ color: "common.white" }}>
          <Icon>arrow_back_ios</Icon>
        </Button>
      </Box>

      <Box position="absolute" zIndex="1" right="30%" top="80%">
        <Button onClick={handleNext} sx={{ color: "common.white" }}>
          <Icon>arrow_forward_ios</Icon>
        </Button>
      </Box>

      <Stack direction="row" position="relative" bgcolor="background.dark">
        <Box {...{ height, width, padding }}></Box>
        {imgs.map((img, i) => (
          <Slide
            key={i}
            in={img.show}
            direction={slideDir(img.show)}
            position="absolute"
            timeout={500}
          >
            <Box
              width={width}
              bgcolor="transparent"
              padding={padding}
              sx={{ boxSizing: "border-box" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={img.img}
                  height={height}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Box>
          </Slide>
        ))}
      </Stack>
    </Box>
  );
}

export default Carousel;
