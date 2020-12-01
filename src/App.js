import React,{UNSAFE_componentWillMount} from 'react';
import Button from './Button';
import Search from './Search';
import SearchTable from './SearchTable';
import Form from './Form';
import Login from './Login';
import {List} from './List';
import Nav from './Nav';
import OSMVehicle from './OSMVehicle';
import Checklist from './Checklist';
import MaterialUiTruck from './MaterialUiTruck';
import k from './k';
import './App.css'
import {placeRequest} from './Fetch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RfidStatusReport from './RfidStatusReport';
import VehicleStatusReport from './RfidStatusReport';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WordList from './WordList/WordList';
import game from './RfidStatusReport';
import Grid from './Grid/Grid';



class App extends React.Component{
    constructor(){
      super();
      this.state={
        name:"madhu",
        arr : [
          "lap",
          "home",
          "office"
        ]
      }
      this.onClikingButton = this.onClikingButton.bind(this);
    }


    onClikingButton(){
      let request = {
        // request : {
        //   data :{

        //   }
        // }
      };
      placeRequest(request,"",this.successCallback,this.errorCallback);   
    }

    successCallback = (response) =>{
      console.log(response)
    } 

    errorCallback = (error) =>{
      console.log(error.message)
    }
    render(){
      return(
        <div >
          <h1> 
            <Nav/>
          </h1>
        <main>
          <Router>     
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/nav" component={Nav} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/searchtable" component={SearchTable} />
            <Route exact path="/osm_vehicle" component={OSMVehicle} />
            <Route exact path="/checklist" component={Checklist} />
            <Route exact path="/truck" component={MaterialUiTruck} />
            <Route exact path="/rfid_status_report" component={RfidStatusReport} />
            <Route exact path="/vehicle_status_report" component={VehicleStatusReport} />
             <Route exact path="/word" component={WordList} />
            <Route exact path="/app" component={k} />
          </Router>   
        </ main>
        </div>
      )
    }
}



export default App;
