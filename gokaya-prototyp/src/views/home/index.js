import { Container, makeStyles, Grid, Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import SearchInput from '../../components/SearchInput';
import ContactForm from '../../components/ContasctForm';
import headerBackgroundImg from '../../layouts/assets/kayaking.jpeg';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PoolIcon from '@material-ui/icons/Pool';
import Img1 from '../../layouts/assets/1.jpeg'
import Img2 from '../../layouts/assets/2.jpg'
import Img3 from '../../layouts/assets/3.jpg'
import Img4 from '../../layouts/assets/4.jpg'
import Log1 from '../../layouts/assets/lo1.png';
import Log2 from '../../layouts/assets/lo2.png';
import Log3 from '../../layouts/assets/lo3.png';
import Log4 from '../../layouts/assets/lo4.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
  },
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    minWidth: '100%'
  },
  infoBackground: {
    backgroundImage: `url(${headerBackgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '750px',
    [theme.breakpoints.down('md')]: {
      height: '550px'
    },
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px'
  },
  searchHeroText: {
    fontSize: '1.9rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '5px 5px 5px black',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginBottom: 22,
  },
  fPtitle: {
    color: '#FFB02A'
  },
  sPtitle: {
    color: '#004F34'
  },
  boxesContainer: {
    maxWidth: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%'
    }
  },
  leftBox: {
    border: '2px solid #004F34',
    borderRadius: 5,
    maxWidth: '25%',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  hidden: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'center',
    }
  },
  rightBox: {
    border: '2px solid #004F34',
    borderRadius: 5,
    width: '65%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      borderRadius: 0
    }
  },
  paddingLeftBox: {
    padding: '5rem 1rem',
    textAlign: 'center',
  },
  leftBoxText: {
    fontFamily: 'Rozha One',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  bookingButton: {
    marginTop: '3rem',
    border: '2px solid #004F34',
    backgroundColor: '#004F34',
    color: 'white'
  },
  bookingButtonHidden: {
    marginTop: '3rem',
    border: '2px solid #004F34',
    backgroundColor: '#004F34',
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginTop: 12
    }
  },
  paddingRightBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'space-around',
    height: '100%'
  },
  flexRowRightBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 235, 255, 0.28)',
    padding: '3px 5px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      textAlign: 'center',
      marginTop: 15,
      padding: '10px 5px',
    }
  },
  textSizeNormal: {
    fontSize: '.8rem',
  },
  fontStyle: {
    textDecoration: 'none',
    color: '#004F34'
  },
  img: {
    width: '500px',
    height: '300px',
    padding: 5,
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '100px'
    }
  },
  logoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  logoImgs: {
    width: '150px',
    height: '80px',
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      width: '200px',
      height: '50px',
      padding: 0,
      marginBottom: 12
    }
  },
  logoImgsLast: {
    width: '150px',
    height: '80px',
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      width: '200px',
      height: '50px',
      padding: 0,
      marginBottom: 0
    }
  }
}));

const HomeView = () => {

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Home'}
    >
      <Container className={classes.style}>
        <Grid item className={classes.infoBackground}>
          <Typography className={classes.searchHeroText}>Find your next Kayak or Sup Adventure</Typography>
          <SearchInput />
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Typography className={classes.title}>What is <span className={classes.fPtitle}>GO</span><span className={classes.sPtitle}>KAYA</span></Typography>
        </Box>
        <Box className={classes.boxesContainer}>
          <Box className={classes.leftBox}>
            <Box className={classes.paddingLeftBox}>
              <Typography className={classes.leftBoxText}>Self-service concept for paddle rental</Typography>
              <Typography className={classes.leftBoxText}>Our first location at</Typography>
              <Typography className={classes.leftBoxText}>Fisktorget in Karlskrona</Typography>
              <Typography className={classes.leftBoxText}>Open every day: 08:00 - 21:00</Typography>
              <Button className={classes.bookingButton}>Book Now</Button>
            </Box>
          </Box>
          <Box className={classes.rightBox}>
            <Box className={classes.paddingRightBox}>
              <Box className={classes.hidden}>
                <Typography className={classes.leftBoxText}>Self-service concept for paddle rental</Typography>
                <Typography className={classes.leftBoxText}>Our first location at</Typography>
                <Typography className={classes.leftBoxText}>Fisktorget in Karlskrona</Typography>
                <Typography className={classes.leftBoxText}>Open every day: 08:00 - 21:00</Typography>
              </Box>
              <Box className={classes.flexRowRightBox}>
                <Box sx={{ paddingRight: 6 }}>
                  <MobileFriendlyIcon fontSize="large"/>
                </Box>
                <Box>
                  <Typography className={classes.leftBoxText}>Book Online</Typography>
                  <Typography className={classes.textSizeNormal}>
                    Book via the web. Select day and product, kayak or stand-up paddle board. To book more than one day (08:00-21:00) contact
                  </Typography>
                  <Link to={'#'} className={classes.fontStyle}><Typography> support@gokaya.se</Typography></Link>
                </Box>
              </Box>
              <Box className={classes.flexRowRightBox}>
                <Box sx={{ paddingRight: 6 }}>
                  <LockOpenIcon fontSize="large"/>
                </Box>
                <Box>
                  <Typography className={classes.leftBoxText}>Unlock Gear</Typography>
                  <Typography className={classes.textSizeNormal}>
                    Digital code is sent to you to unlock the rental equipment.
                  </Typography>
                  <Typography className={classes.textSizeNormal}>
                    Life jackets, paddles and spray skirt available on site.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.flexRowRightBox}>
                <Box sx={{ paddingRight: 6 }}>
                  <PoolIcon fontSize="large"/>
                </Box>
                <Box>
                  <Typography className={classes.leftBoxText}>Gokaya</Typography>
                  <Typography className={classes.textSizeNormal}>
                    Paddle away on your adventure!
                  </Typography>
                </Box>
              </Box>
              <Button className={classes.bookingButtonHidden}>Book Now</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40, width: '100%' }}>
          <Box>
            <Typography className={classes.title}>Ljungskär Karlskrona</Typography>
          </Box>
          <Box>
            <img src={Img1} alt="1" className={classes.img}/>
            <img src={Img2} alt="2" className={classes.img}/>
          </Box>
          <Box>
            <img src={Img3} alt="3" className={classes.img}/>
            <img src={Img4} alt="4" className={classes.img}/>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 40 }}>
          <Box>
            <Typography className={classes.title}>Partners</Typography>
          </Box>
          <Box className={classes.logoContainer}>
            <img src={Log1} alt="mincLogo" className={classes.logoImgs}/>
            <img src={Log2} alt="mincLogo" className={classes.logoImgs}/>
            <img src={Log3} alt="mincLogo" className={classes.logoImgs}/>
            <img src={Log4} alt="mincLogo" className={classes.logoImgsLast}/>
          </Box>
        </Box>
        <ContactForm />
      </Container>
    </Page>
  )
}

export default HomeView;