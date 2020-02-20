
import React, { Fragment } from "react";
import {ButtonToolbar} from 'react-bootstrap';
import { Button} from 'react-bootstrap';

class OSMVehicle extends React.Component {
 constructor(props){
      super(props);
      this.state={
        doc : '',
        date : '',
        truck : '',
        triptype : '',
        drivername : '',
        phone : '',
        emptywt : '',
        loadedwt : '',
        dl : '',
        sto : '',
   		transport_names: [],
   		truck_type: [],
   		transport_name:'',
   		truck_name:''
     }
   }

    ChangeHandler = (e) =>{
      this.setState({[e.target.name]: e.target.value})

     }

    checklist = e =>{
     	this.props.history.push("/checklist")
    
    }

  onClear = (event) => {
    this.setState({doc: "",date: "",truck:"",triptype:"",drivername:"",phone:"",emptywt:"",loadedwt:"",dl:"",sto:"",transport_name:"",truck_name:""});
  }

  onChangetransport = (event) => {
    this.setState({transport_name: event.target.value});
  
  }

   onChangetruck = (event) => {
    this.setState({truck_name: event.target.value});
  }

   componentDidMount() {
   	const transport_names = ["madhu", "bala", "deepak", "amala"]
   	const truck_type = ["car", "cycle", "auto", "truck"]
   	this.setState({transport_names: transport_names})
   	this.setState({truck_type: truck_type})
    }




 render() {
 	 console.log(this.state.transport_name)
 	 console.log(this.state.truck_name)
 	let vendor = ['volvo', 'saab', 'ope1', 'audi']
    return (
     <Fragment>
     <div className="row"  style={{margin: "20px"}}>
      <div className="col-md-6">
        <label htmlFor="example1">Registration Doc#</label>
        <input  type="text" name='doc' value={this.state.doc} onChange={this.ChangeHandler} id="example1" className="form-control form-control" style={{width: "200px"}}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="example2">Registration Date</label>
        <input type="text" name='date' value={this.state.date} onChange={this.ChangeHandler} id="example2" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">Transport Vendor</label>
        <select id="vendor" className="form-control form-control" style={{width: "200px"}}   onChange={this.onChangetransport} >
          <option value=" " selected>Select</option>
            {this.state.transport_names.map((transport)=>(
            	<option value={transport} checked={this.state.transport_name}>{transport}</option>
            	))}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">Truck Number</label>
        <input type="text" name='truck' onChange={this.ChangeHandler} value={this.state.truck}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      </div>
       <div className="row"  style={{margin: "20px"}}>
      <div className="col-md-6">
        <label htmlFor="example1">Truck Type</label>
         <select id="truck" className="form-control form-control" style={{width: "200px"}}   onChange={this.onChangetruck} >
           <option value=" " selected>Select</option>
            {this.state.truck_type.map((trucktype)=>(
            	<option value={trucktype}  checked={this.state.truck_name}>{trucktype}</option>
            ))}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="example2">Trip Type</label>
        <input type="text" name='triptype' onChange={this.ChangeHandler} value={this.state.triptype}  id="example2" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">Driver Name</label>
        <input type="text" name='drivername' onChange={this.ChangeHandler} value={this.state.drivername}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">Driver Phone</label>
        <input type="text" name='phone' value={this.state.phone} onChange={this.ChangeHandler}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
       <div className="col-md-6">
        <label htmlFor="example3">Vehicle Empty Wt in Kg</label>
        <input type="text" name='emptywt' onChange={this.ChangeHandler} value={this.state.emptywt}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">Vehicle Loaded Wt</label>
        <input type="text" name='loadedwt' value={this.state.loadedwt} onChange={this.ChangeHandler}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
       <div className="col-md-6">
        <label htmlFor="example3">DL Number</label>
        <input type="text" name='dl' onChange={this.ChangeHandler} value={this.state.dl}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      <div className="col-md-6">
        <label htmlFor="example3">STO Invoice#</label>
        <input type="text" name='sto' value={this.state.sto} onChange={this.ChangeHandler}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </div>
      </div>
      <div className="row" style={{float: "right"}}>
        <ButtonToolbar>
          <Button   style={{margin: "20px"}} variant="primary" onClick={this.onClear}>Clear</Button>
          <Button   style={{margin: "20px"}} variant="primary">Edit</Button>
          <Button  style={{margin: "20px"}} variant="primary">Submit</Button>
          <Button style={{margin: "20px"}} variant="primary">Exit</Button>
        </ButtonToolbar>
      </div>
        <div className="row" style={{float: "left"}}>
            <ButtonToolbar>
			    <Button  style={{margin: "20px"}} onClick={this.checklist} variant="primary">Check List</Button>
			    <Button style={{margin: "20px"}} variant="primary">Barcode</Button>
            </ButtonToolbar>
        </div>
    </Fragment>

    );
  }
}
export default OSMVehicle