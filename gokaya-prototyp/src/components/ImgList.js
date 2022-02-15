import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Img1 from '../layouts/assets/1.jpeg'
import Img2 from '../layouts/assets/2.jpg'
import Img3 from '../layouts/assets/3.jpg'
import Img4 from '../layouts/assets/4.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50,
    },
    img: {
        width: '500px',
        height: '300px',
        padding: 5
    }
}));

export default function ImgList() {
    const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img src={Img1} alt="1" className={classes.img}/>
      <img src={Img2} alt="2" className={classes.img}/>
      <img src={Img3} alt="3" className={classes.img}/>
      <img src={Img4} alt="4" className={classes.img}/>
    </Box>
  );
}
