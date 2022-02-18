import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import './style.css';

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
      <div id="main">
        <div className='fof'>
          <h1>Error 404 | page not found</h1>
        </div>
      </div>
    </Page>
  )
}

export default NotFoundPageView;