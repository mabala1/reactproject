import React from 'react'
import { Table} from 'react-bootstrap';


class Checklist extends React.Component {


  render() {
    return (
     <div> 
    	  <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Select</th>
              <th>Check List</th>
              <th>Remarks</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td> <input type="checkbox" name="name1" /></td>
                <td>Driver Behaviour Issue</td>  
                <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr>
              <tr>
                <td> <input type="checkbox" name="name1" /></td>  
                <td>Test Report</td>
               <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="name1" /></td>
                <td>Original Invoice</td>
                <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td> 
              </tr>
              <tr>
                <td><input type="checkbox" name="name1" /></td>
                <td>Packing List</td>  
                <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="name1" /></td>  
                <td>Samples</td>
                <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="name1" /></td>  
                <td>EMS Certificate</td>
                <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr> 
              <tr>
                <td><input type="checkbox" name="name1" /></td>
                <td>Vehicle Rc</td>  
               <td>
                  <input type="text"  className="form-control form-control" style={{width: "200px"}}/>
                </td>
              </tr> 
            </tbody>     
        </Table>  
      </div>
    );
  }
}
export default Checklist