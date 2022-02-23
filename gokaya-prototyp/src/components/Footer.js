import { Container, makeStyles, Box, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    marginTop: 35,
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(270px, 1fr))',
    gridGap: '24px',
    backgroundColor: '#004F34',
    justifyItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      '& > *': {
        '&:firstChild': {
          width: '100%'
        },

        width: 'calc(33.334% - 17px)'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& > *': {
        width: 'calc(100%)'
      }
    }
  },

  footerHeaderFC: {
    fontsize: '1.35rem',
    color: 'white',
  },

  footerHeader: {
    fontsize: '1.35rem',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    }
  },

  footerLinks: {
    textDecoration: 'none',
    fontStyle: 'none',
    fontSize: '0.9rem',
    color: 'white',
    '&:hover': {
      color: '#F3F3F3'
    }
  },
  listStyle: {
    listStyle: 'none',
    padding: 0
  },
  divider: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  }
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <Container className={classes.footerWrapper}>
      <Box>
        <Box>
          <Box>
            <h2 className={classes.footerHeaderFC}>Contact Us</h2>
            <ul className={classes.listStyle}>
              <li>
                <p className={classes.footerLinks}>
                  {'+46 735 71 71 71'}
                </p>
              </li>
              <li>
                <p className={classes.footerLinks}>{`Testgatan 1`}</p>
              </li>
              <li>
                <p className={classes.footerLinks}>{`Våning 3, 12345 Malmö`}</p>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Divider className={classes.divider}/>
      <Box>
        <Box>
          <h2 className={classes.footerHeader}>Gokaya</h2>
          <ul className={classes.listStyle}>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Legal conditions</p>
              </Link>
            </li>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Privacy policy</p>
              </Link>
            </li>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Cookie policy</p>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
      <Divider className={classes.divider}/>
      <Box>
        <Box>
          <h2 className={classes.footerHeader}>{'Discover Gokaya'}</h2>
          <ul className={classes.listStyle}>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p className={classes.footerLinks}>Activities</p>
              </Link>
            </li>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Guides</p>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
      <Divider className={classes.divider}/>
      <Box>
        <Box>
          <h2 className={classes.footerHeader}>Clubs</h2>
          <ul className={classes.listStyle}>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>I want to be seen on GoKaya!</p>
              </Link>
            </li>
            <li>
              <Link to={'#'} className={classes.footerLinks}>
                <p>Our clubs</p>
              </Link>
            </li>
            <li>
              <div>
                <Link to={'#'} className={classes.footerLinks}>
                  <p>Kayak, Canoe, SUP...</p>
                </Link>
              </div>
            </li>
          </ul>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer;