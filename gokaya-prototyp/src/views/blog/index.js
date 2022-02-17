import { Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from './blogs-content/Content'

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

const BlogsView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Blogs'}
    >
      <Container className={classes.style}>
        <Content />
      </Container>
    </Page>
  )
}

export default BlogsView;