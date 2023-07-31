import React, { useEffect, useRef, useState } from "react";
import { MainCard } from "../../style/style";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { detailofimgnut, imagenuts } from "../../data/navlink";
import { Link } from "react-router-dom";
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from "@mui/material";
import Detailofimage from "./Detailofimage";
import Eachanimtion from "./Eachanimtion";
import { useSelector } from "react-redux";
import Slider from "react-slick";
// import { theme } from '../../utils/theme'
// import Detailofimage from './Detailofimage'

function Reviewcandy() {
  let review = useSelector((state: any) => state.reviewnuts.value);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // let controls = useAnimation()
  const reftoimage = useRef<HTMLImageElement | null>(null);
  const [click, setclick] = useState(false);
  function clicktoreviewdetail(
    event: React.MouseEvent<HTMLImageElement>,
    i: number
  ) {
    // if(i==0){
    // controls.start({

    //     x: "",
    //     width:"200%",
    //     opacity: 1,
    //     // zIndex: 1,
    //     transition: { duration: 0.3},
    //   });
    // }else if (i==1){

    // }
    setclick(!click);
  }
  useEffect(() => {
    console.log(review);
  }, [review]);
  return (
    <Container sx={{ marginY: "10px" }}>
      <MainCard
        sx={{
          position: "relative",
          justifyContent: "flex-end",
          alignItems: "center",
          display: { sm: "none", xs: "none", md: "flex" },
        }}
      >
        {detailofimgnut.map((ele, i, array) => {
          return (
            <Eachanimtion
              image={i === 0 ? array[4].image : ele.id !== 4 ? ele.image : ""}
              index={i}
              ele={i === 0 ? array[4] : ele.id !== 4 ? ele : null}
            />
          );
        })}
        <Detailofimage ele={review ? review : detailofimgnut[0]} />
      </MainCard>
      <Card sx={{ backgroundColor: "" }}>
        <Slider {...settings}>
          {/* <Box sx={{backgroundColor:theme.palette?.primary.}}>
        </Box> */}

          {detailofimgnut.map((ele) => {
            return (
              <CardContent sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="50"
                  width="20"
                  image={ele.image}
                  alt="Paella dish"
                />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {ele.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {ele.detail}
                </Typography>
              </CardContent>
            );
          })}
        </Slider>
      </Card>
    </Container>
  );
}

export default Reviewcandy;
