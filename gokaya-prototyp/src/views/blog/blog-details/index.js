import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Divider, makeStyles } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Loading from '../../../components/Loading';

const useStyles = makeStyles(() => ({
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '50%',
        margin: 'auto',
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
        margin: '5px 0px'
    },
    links: {
        textDecoration: 'none'
    }
}));

const BlogDetailsView = () => {
  const { id } = useParams();
  const apiUrl = 'http://localhost:1337';
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getBlog = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/blogs/${id}?populate=*`);
      const json = await response.json();
      const code = response.status;
      if( code >= 200 && code < 300 ) {
        setBlog(json.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBlog();
  }, [])

  if(loading) return <Loading />

          console.log(blog.attributes.cover?.data.attributes.url)
    const imgUrl = blog.attributes.cover?.data.attributes.url;
    const alternativeText = blog.attributes.cover?.data.attributes.alternativeText;
    const title = blog.attributes.title;
    const description = blog.attributes.description;
    const created = blog.attributes.created;
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
      </CardContent>
    </CardActionArea>
  </Card>
  )
};

export default BlogDetailsView;