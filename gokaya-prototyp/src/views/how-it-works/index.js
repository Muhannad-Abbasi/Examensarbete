import { Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}));

const HowItWorks = () => {

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'How it works'}
    >
      <Container className={classes.style}>
          <p>bye</p>
      </Container>
    </Page>
  )
}

export default HowItWorks;