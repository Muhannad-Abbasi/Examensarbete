import { Card, CardContent, CardMedia, Typography, CardActionArea, makeStyles, Box, CardActions, Button } from '@material-ui/core';
import Page from '../../components/Page';
import jsImg1 from '../../layouts/assets/jsImg1.jpg'
import jsImg2 from '../../layouts/assets/jsImg2.jpg'
import jsImg3 from '../../layouts/assets/jsImg3.jpg'
import jsImg4 from '../../layouts/assets/jsImg4.jpg'
import RoomIcon from '@material-ui/icons/Room';

const productsData = [
  {
    id: 1,
    productName: 'Åboden',
    location: 'Borgeby Slottsväg 13',
    img: `${jsImg1}`,
    price: 300
  },
  {
    id: 2,
    productName: 'Kulla Kajak',
    location: 'Promenaden 17',
    img: `${jsImg2}`,
    price: 500
  },
  {
    id: 3,
    productName: 'Lödde Båt & Kanotcenter',
    location: 'Äppelbacken',
    img: `${jsImg3}`,
    price: 800
  },
  {
    id: 4,
    productName: 'Ven Kajak',
    location: 'Hakenstigen 147',
    img: `${jsImg4}`,
    price: 200
  },
  {
    id: 5,
    productName: 'Åboden',
    location: 'Borgeby Slottsväg 13',
    img: `${jsImg1}`,
    price: 300
  },
  {
    id: 6,
    productName: 'Kulla Kajak',
    location: 'Promenaden 17',
    img: `${jsImg2}`,
    price: 500
  },
  {
    id: 7,
    productName: 'Lödde Båt & Kanotcenter',
    location: 'Äppelbacken',
    img: `${jsImg3}`,
    price: 800
  },
  {
    id: 8,
    productName: 'Ven Kajak',
    location: 'Hakenstigen 147',
    img: `${jsImg4}`,
    price: 200
  },
  {
    id: 9,
    productName: 'Åboden',
    location: 'Borgeby Slottsväg 13',
    img: `${jsImg1}`,
    price: 300
  },
  {
    id: 10,
    productName: 'Kulla Kajak',
    location: 'Promenaden 17',
    img: `${jsImg2}`,
    price: 500
  },
  {
    id: 11,
    productName: 'Lödde Båt & Kanotcenter',
    location: 'Äppelbacken',
    img: `${jsImg3}`,
    price: 800
  },
  {
    id: 12,
    productName: 'Ven Kajak',
    location: 'Hakenstigen 147',
    img: `${jsImg4}`,
    price: 200
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: 0,
    paddingTop: theme.spacing(3),
  },
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '15rem',
    margin: 6,
    position: 'relative',
    backgroundColor: 'whitesmoke',
  },
  resImg: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    objectFit: 'contain',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '9rem',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 2.25)'
  },
  buttonToRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardButton: {
    backgroundColor: '#004F34',
    color: 'white',
    "&:hover": {
      backgroundColor: "#004F34"
    }
  }
}));

const BookingView = () => {

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Booking'}
    >
      <Box sx= {{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '50%', margin: 'auto' }}>
        {productsData.map((product) => {
          return (
            <>
              <Card className={classes.style}>
                <CardActionArea>
                  <CardMedia 
                    component="img"
                    image={product.img}
                    className={classes.resImg}
                  />
                  <CardContent>
                    <Typography className={classes.title}>
                      {product.productName}
                    </Typography>
                    <Typography>
                      <RoomIcon fontSize='small'/> {product.location}
                    </Typography>
                    <Typography>
                      Cost per day: {product.price}:-
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.buttonToRight}>
                    <Button size="small" className={classes.cardButton}>Select</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </>
          )
        })}
      </Box>
    </Page>
  )
}

export default BookingView;