import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, makeStyles } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Loading from '../../../components/Loading';

const useStyles = makeStyles(() => ({
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '15rem',
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
    rate: {
        position: 'absolute',
        top: 15,
        fontSize: '1.5rem',
        color: 'yellow',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 2.25)'
    },
    font: {
        fontWeight: 'bold',
        color: 'white',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 2.25)'
    },
    buttonCenter: {
        justifyContent: 'center',
        borderTop: '1px solid rgb(194, 194, 194)'
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
        const description = data.attributes.description.substring(0, 100);
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
                <Typography>{created}</Typography>
                <Typography>{title}</Typography>
                <Typography>{description}...</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </>
  )
};

export default Content;