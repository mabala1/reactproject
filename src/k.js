
import React, { Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { borders } from '@material-ui/system';




class MaterialUiTruck extends React.Component {
 constructor(props){
      super(props);
      this.state={
        reg : '',
        fromtruck : '',
        totruck : '',
        fromtransport : '',
        drivername : '',
        phone : '',
        sto_names: [],
        vendor_names: [],
        sto_name: '',
        vendor_name: ''  
     }
   }


  onChangesto = (event) => {
    console.log("inside onchangesto")
    this.setState({sto_name: event.target.value});
  }

  onChangevendor = (event) => {
    console.log("inside onchangevendor")
    this.setState({vendor_name: event.target.value});
  }

  onClear = (event) => {
    this.setState({sto_name: " ",vendor_name: "",phone:"",drivername:"",fromtransport:"",totruck:"",fromtruck:"",reg:""});
  }


  componentDidMount() {
    const sto_names = ["1", "2", "3", "4"]
    const vendor_names = ["madhu", "bala", "deepak", "amala"]
    this.setState({sto_names: sto_names, vendor_names: vendor_names})
  }



 render() {
    console.log(this.state.sto_name)
  console.log(this.state.vendor_name)
  return (
  <form  noValidate autoComplete="off">
   <Card style={{padding:20,marginLeft:200,marginRight:200,marginTop:30, boxShadow: 'rgba(189, 195, 199, 1) 0px 1px 6px, rgba(189, 195, 199, 1) 0px 1px 4px'}}>
    <CardContent>
      <Grid container justify="center"  >
        <Grid item xs={8} >
          <Grid container >
            <Grid item xs={6} style={{ marginTop:10}}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-label">STO Invoice#</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{width:'250px'}}
                  onChange ={this.onChangesto}
                >
                  <MenuItem value=" " selected>Select</MenuItem>
               {this.state.sto_names.map((sto_name)=>(
              <MenuItem value={sto_name}>{sto_name}</MenuItem>
              ))}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6} style={{ marginTop:10}}>
              <TextField id="standard-basic" label="Registration"  style={{width:'270px',marginLeft:"60px"}}  variant="outlined"   value={this.state.reg}
              onChange={e => this.setState({ reg: e.target.value })}/>     
            </Grid>
          </Grid>
        </Grid>
          <Grid item xs={8} >
            <Grid container>
              <Grid item xs={6} style={{ marginTop:30}}>
                <TextField id="standard-basic" label="From Truck Number"  style={{width:'250px'}} variant="outlined" value={this.state.fromtruck}
                onChange={e => this.setState({ fromtruck: e.target.value })}/>
              </Grid>
              <Grid item xs={6} style={{ marginTop:30}}>
                <TextField id="standard-basic" label="To Truck Number"  style={{width:'270px',marginLeft:"60px"}} variant="outlined" value={this.state.totruck}
                onChange={e => this.setState({ totruck: e.target.value })} />    
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={6} style={{ marginTop:30}}>
                <TextField id="standard-basic" label="From Transport Vendor"  style={{width:'250px'}}variant="outlined" value={this.state.fromtransport}
                onChange={e => this.setState({ fromtransport: e.target.value })}/>
             </Grid>
              <Grid item xs={6} style={{ marginTop:30}}>
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-label"  style={{marginLeft:"60px"}}>To Transport Vendor</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width:'270px',marginLeft:"60px"}}
                    onChange ={this.onChangevendor}
                  >
                  <MenuItem value=" " selected>Select</MenuItem>
                   {this.state.vendor_names.map((vendor)=>(
                  <MenuItem value={vendor}>{vendor}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={6} style={{ marginTop:30}}>
                <TextField id="standard-basic" label="Driver Name"  style={{width:'250px'}} variant="outlined" value={this.state.drivername}
                onChange={e => this.setState({ drivername: e.target.value })}/>
              </Grid>
              <Grid item xs={6} style={{ marginTop:30}}>
                <TextField id="standard-basic" label="Driver Phone"variant="outlined"  style={{width:'270px',marginLeft:"60px"}} value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })} />
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </CardContent>
    </Card>
    <Grid container justify="center"  style={{ marginTop:40}} >
    <Grid item>
      <Button variant="contained" color="primary" style={{ marginLeft:0}} onClick={this.onClear}>
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
}
export default MaterialUiTruck