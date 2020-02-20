
import React, { Fragment } from "react";
import {ButtonToolbar} from 'react-bootstrap';
import { Button,Row,Col,Container} from 'react-bootstrap';

class Form extends React.Component {
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


  ChangeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})

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
     <Container>
     <Row>
      <Col lg="2" align="right"><label htmlFor="example1">STO Invoice#</label></Col>
      <Col lg="4">
         <select id="sto_name" className="form-control form-control" style={{width: "200px"}} onChange={this.onChangesto}>
            <option value=" " selected>Select</option>
            {this.state.sto_names.map((sto_name)=>(
              <option value={sto_name}>{sto_name}</option>
              ))}
        </select>
      </Col>
      <Col lg="2" align="right"><label htmlFor="example2">Registration#</label></Col>
       <Col lg="4"> 
        <input type="text" name='reg' value={this.state.reg} onChange={this.ChangeHandler} id="example2" className="form-control form-control"  style={{width: "200px"}} />
      </Col>    
      </Row><br/>
      <Row >
      <Col lg="2" align="right"><label htmlFor="example3">From Truck Number</label></Col>
      <Col lg="4">  
        <input type="text" name='fromtruck' onChange={this.ChangeHandler} value={this.state.fromtruck}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </Col>
      <Col lg="2" align="right"><label htmlFor="example3">To Truck Number</label></Col>
      <Col lg="4"> 
        <input type="text" name='totruck' onChange={this.ChangeHandler} value={this.state.totruck}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </Col>
      </Row><br/>
      <Row >
      <Col lg="2" align="right"><label htmlFor="example1">From Transport Vendor</label></Col>
      <Col lg="4">
        <input type="text" name='fromtransport' onChange={this.ChangeHandler} value={this.state.fromtransport}  id="example1" className="form-control form-control" style={{width: "200px"}}/>
      </Col>
       <Col lg="2" align="right"><label htmlFor="example2">To Transport Vendor</label></Col>
      <Col lg="4">
        <select id="vendor" className="form-control form-control"  style={{width: "200px"}}   onChange={this.onChangevendor} >
         <option value=" " selected>Select</option>
            {this.state.vendor_names.map((vendor)=>(
              <option value={vendor} >{vendor}</option>
              ))}
        </select>
      </Col>
      </Row><br/>
      <Row >
      <Col lg="2" align="right"><label htmlFor="example3">Driver Name (New)</label></Col>
      <Col lg="4">       
        <input type="text" name='drivername' onChange={this.ChangeHandler} value={this.state.drivername}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </Col>
      <Col lg="2" align="right"><label htmlFor="example3">Driver Phone (New)</label></Col>
      <Col lg="4">     
        <input type="text" name='phone' value={this.state.phone} onChange={this.ChangeHandler}  id="example3" className="form-control form-control"  style={{width: "200px"}} />
      </Col>
      </Row><br/>
      <div  style={{float: "right"}} >
     
        <ButtonToolbar >
          <Button   style={{marginLeft: "10px"}} variant="primary"  onClick={this.onClear}>Clear</Button>
          <Button style={{marginLeft: "10px"}} v variant="primary">Submit</Button>
          <Button style={{marginLeft: "10px"}} v variant="primary">Exit</Button>
        </ButtonToolbar>
        </div>
     
    </Container>

    );
  }
}
export default Form