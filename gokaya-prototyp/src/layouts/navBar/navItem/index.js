import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, ListItem, makeStyles } from '@material-ui/core';
import Icon from '@mui/material/Icon';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'space-between',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
  },
  iconButton: {
    justifyContent: 'flex-start',
  },
  icon: {
    paddingBottom: 35
  },
  title: {
    marginRight: 'auto',
    paddingLeft: 25
  }
}));

const NavItem = (
  {
    className,
    href,
    title,
    icon,
    ...rest
  }
) => {
  const classes = useStyles();
  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        style={{ backgroundColor: 'transparent' }}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        <Icon className={classes.icon}>{icon}</Icon>
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string
};

export default NavItem;
