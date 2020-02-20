import React from 'react'
import axios from 'axios';
import './Search.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Table} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class VehicleStatusReport extends React.Component {
 constructor(props){
      super(props);
      this.state={
      	date : '',
        plant: "",
        location:"",
      	search : []
      
      }
     }

    // submitHandler = e =>{
    //  	e.preventDefault();
    //  	axios
    //  	.get(`https://api.github.com/search/users?q=${this.state.searchs}`)
    //     .then(response =>{
    //       this.setState({search : response.data.items})
    //     })
    //     .catch(error => {
    //     	console.log(error)
    //     })
    // }


  render() {
    return (
     <div> 
    	<form>
    	<Grid container >
      <Grid item xs={3} ></Grid>
        <Grid item xs={6} >
          <Grid container>
            <Grid item xs={6} style={{ marginTop:10, marginBottom:10}}>
             <TextField id="standard-basic" label="Date"    value={this.state.date}
              onChange={e => this.setState({ date: e.target.value })}/>  
            </Grid>
            <Grid item xs={6} style={{ marginTop:10, marginBottom:10}}>
              <TextField id="standard-basic" label="Plant"    value={this.state.plant}
              onChange={e => this.setState({ plant: e.target.value })}/>     
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} ></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} >
          <Grid container>
            <Grid item xs={6} style={{ marginTop:10, marginBottom:10}}>
             <TextField id="standard-basic" label="Location"    value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}/>  
            </Grid>
          </Grid>
        </Grid>
        </Grid>          
      </ form>
      <Grid container justify="flex-start">
        <Grid item xs={1}>
          <Button variant="contained" color="primary"  style={{marginLeft:400,marginTop:50}}>
          Search
         </Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}
export default VehicleStatusReport