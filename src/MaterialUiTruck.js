import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useState } from 'react';
import css from "./App.css"
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: -1,
    width: 223,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MaterialUiTruck() {
  const classes = useStyles();
  const [sto, setSto] = React.useState('');
  const [vendor,setVendor ] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [reg, setreg] = useState('');
  const [fromtruck, setfromtruck] = useState('');
  const [totruck, settotruck] = useState('');
  const [fromtransport, setfromtransport] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setSto(event.target.value);
  };
   const handlevendor = event => {
    setVendor(event.target.value);
  };

   const Onclear = (event) => {
     setreg('');
     setfromtruck('');
     settotruck('');
     setfromtransport('');
     setname('');
     setphone('');
     setSto('');
     setVendor('');

  }

  return (
     <form  noValidate autoComplete="off">
    <Grid container justify="center" className="mainContainer" style={{ minHeight: "50vh" }} spacing={0} direction="column" alignItems="center"  >
      <Grid item  xs={6} sm={8} md={8} lg={8} >
        <Card>
          <CardContent>   
              <Grid container spacing={6} >
                <Grid item xs={12} sm={6} md={6} lg={6}    >
                  <FormControl variant="outlined" className={classes.formControl} >
                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  STO Invoice
                    
                  </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={sto}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} >
                  <TextField id="standard-basic" label="Registration"   value={reg} onInput={e => setreg(e.target.value)}  variant="outlined"   
                  />     
                </Grid>
              </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="From Truck Number"  variant="outlined" value={fromtruck} onInput={e => setfromtruck(e.target.value)}
              />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="To Truck Number"  variant="outlined" value={totruck} onInput={e => settotruck(e.target.value)}
               />    
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="FromTransportVendor" variant="outlined" value={fromtransport} onInput={e => setfromtransport(e.target.value)}
               />
             </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} >
               <FormControl variant="outlined" className={classes.formControl} >
                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  To TransportVendor
                    
                  </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={vendor}
                    onChange={handlevendor}
                    labelWidth={labelWidth}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="Driver Name" variant="outlined"
              value={name} onInput={e => setname(e.target.value)}/>
              </Grid>
             <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" value={phone} onInput={e => setphone(e.target.value)}label="Driver Phone"variant="outlined"  
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Grid container justify="center"  style={{ marginTop:40}} >
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:0}}  onClick={Onclear}>
        Clear
      </Button>
    </Grid>
    <Grid item >
      <Button variant="contained" color="primary" style={{ marginLeft:25}}>
        Exit
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:25}}>
        Submit
      </Button>
    </Grid>
    </Grid>
  </form>
  );
}

