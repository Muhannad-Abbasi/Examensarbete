import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '250px'
    }
  },
  mt: {
    marginTop: 10
  }
}));


export default function SearchInput() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  const bookingPage = () => {
    navigate(`/booking-kayak`);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div className={classes.mt}>
      <FormControl className={classes.formControl}>
        <Select
        sx={{ backgroundColor: 'white', borderRadius: 12, paddingLeft: 2}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>City, Address, Location, Club...</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
              onClick={() => bookingPage()}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
