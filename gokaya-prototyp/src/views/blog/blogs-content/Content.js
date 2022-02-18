import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Divider, makeStyles } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Loading from '../../../components/Loading';

const useStyles = makeStyles((theme) => ({
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30rem',
    margin: 6,
    position: 'relative',
    backgroundColor: 'whitesmoke'
  },
  resImg: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    objectFit: 'contain'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  date: {
    textAlign: 'center'
  },
  buttonToRight: {
    float: 'right',
    margin: '5px 0px',
    [theme.breakpoints.down('xs')]: {
      float: 'none',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  },
  links: {
    textDecoration: 'none'
  }
}));

const Content = () => {
  const apiUrl = 'http://localhost:1337';
  const classes = useStyles();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/blogs?populate=*`);
      const json = await response.json();
      const code = response.status;
      if( code >= 200 && code < 300 ) {
        setBlogs(json.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBlogs();
  }, [])

  if(loading) return <Loading />

  return (
    <>
      {blogs.map((data) => {
        const imgUrl = data.attributes.cover?.data?.attributes.url;
        const alternativeText = data.attributes.cover?.data?.attributes.alternativeText;
        const title = data.attributes.title;
        const description = data.attributes.description.substring(0, 200);
        const created = data.attributes.created;
        return (
          <Card className={classes.style}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.resImg}
                image={`${apiUrl}${imgUrl}`}
                alt={alternativeText}
              />
              <CardContent>
                <Typography className={classes.date}>{created}</Typography>
                <Typography className={classes.title}>{title}</Typography>
                <Divider sx={{ margin: '3px 0px' }}/>
                <Typography>{description}...</Typography>
                <RouterLink key={data.id} to={`/blogs/${data.id}`} className={classes.links}>
                  <Button className={classes.buttonToRight}>Read more</Button>
                </RouterLink>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </>
  )
};

export default Content;