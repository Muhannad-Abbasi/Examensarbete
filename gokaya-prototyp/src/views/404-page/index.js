import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: 0,
    paddingTop: theme.spacing(3),
  },
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}));

const NotFoundPageView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'404 | page not found'}
    >
      <div class="container">
        <div class="boo-wrapper">
            <div class="boo">
            <div class="face"></div>
            </div>
            <div class="shadow"></div>
        
            <h1>Whoops!</h1>
            <p>We couldn't find the page you<br />were looking for.</p>
        </div>
      </div>
    </Page>
  )
}

export default NotFoundPageView;