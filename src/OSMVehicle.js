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
    width: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function OSMVehicle() {
  const classes = useStyles();
  const WordSearch = require("@blex41/word-search");
  const options = {
  cols: 6,
  rows: 6,
  disabledDirections: ["N", "W", "NW", "SW"],
  dictionary: ["Hello", "crêpe", "Škoda", "word", "search"],
  maxWords: 20,
  backwardsProbability: 0.3,
  upperCase: true,
  diacritics: true
};
 
// Create a new puzzle
const ws = new WordSearch(options);
 
// Use its methods
console.log(ws.toString());
  const [trucktype, settrucktype] = React.useState('');
  const [vendor,setVendor ] = React.useState('');
  const [triptype, setTripType] = useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputTruck = React.useRef(null);
  const [labelTruck, setLabelTruck] = React.useState(0);
  const inputTrip = React.useRef(null);
  const [labelTrip, setLabelTrip] = React.useState(0);
  const [reg, setreg] = useState('');
  const [regdate, setregdate] = useState('');
  const [truck, settruck] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [empty, setempty] = useState('');
  const [loaded, setloaded] = useState('');
  const [dl, setdl] = useState('');
  const [sto, setsto] = useState('');

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    setLabelTruck(inputTruck.current.offsetWidth);
    setLabelTrip(inputTrip.current.offsetWidth);
  }, []);

  const handletrucktype = event => {
    settrucktype(event.target.value);
  };
  const handlevendor = event => {
    setVendor(event.target.value);
  };
  const handletriptype = event => {
    setTripType(event.target.value);
  };

  const checklist = event => {
    window.location.href = '/checklist'
  };


   const Onclear = (event) => {
     setreg('');
     setregdate('');
     settruck('');
     settrucktype('');
     setTripType('');
     setname('');
     setphone('');
     setVendor('');
     setempty('');
     setloaded('');
     setdl('');
     setsto('');

  }

  return (
     <form  noValidate autoComplete="off">
    <Grid container justify="center" className="mainContainer" style={{ marginTop: "10px" }} spacing={0} direction="column" alignItems="center" >
      <Grid item  xs={6} sm={8} md={8} lg={8} >
        <Card>
          <CardContent>   
              <Grid container spacing={6} >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField id="standard-basic" label="Registration Doc"   value={reg} onInput={e => setreg(e.target.value)}  variant="outlined"   
                  />  
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} >
                  <TextField id="standard-basic" label="Registration Date"   value={'11'} onInput={e => setregdate(e.target.value)}  variant="outlined"   
                  />     
                </Grid>
              </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <TextField id="standard-basic" label="Truck Number"  variant="outlined" value={truck} onInput={e => settruck(e.target.value)}
              />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                 <FormControl variant="outlined" className={classes.formControl} >
                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Transport Vendor
                    
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
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel ref={inputTrip} id="demo-simple-select-outlined-label">
                Trip Type
                  
                </InputLabel>
               <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={triptype}
                  onChange={handletriptype}
                  labelWidth={labelTrip}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
               </Select>
              </FormControl>  
             </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} >
               <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel ref={inputTruck} id="demo-simple-select-outlined-label">
                Truck Type
                  
                </InputLabel>
               <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={trucktype}
                  onChange={handletrucktype}
                  labelWidth={labelTruck}
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
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <TextField id="standard-basic" label="Vehicle empty Wt in Kg" variant="outlined"
              value={empty} onInput={e => setempty(e.target.value)}/>
              </Grid>
             <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" value={loaded} onInput={e => setloaded(e.target.value)}label="Loaded Wt in Kg"variant="outlined"  
                />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <TextField id="standard-basic" label="DL Num" variant="outlined"
              value={dl} onInput={e => setdl(e.target.value)}/>
              </Grid>
             <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" value={sto} onInput={e => setsto(e.target.value)}label="STO invoice" variant="outlined"  
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Grid container justify="center"  style={{ marginTop:10}} >
     <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:0}} onClick={checklist} >
        Checklist
      </Button>
    </Grid>
     <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:25}} >
        Barcode
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:25}}  onClick={Onclear}>
        Clear
      </Button>
    </Grid>
    <Grid item >
      <Button variant="contained" color="primary" style={{ marginLeft:25}}>
        Edit
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:25}}>
        Submit
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:25}}>
        Exit
      </Button>
    </Grid>
    </Grid>
  </form>
  );
}

