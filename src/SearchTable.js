import React from 'react'
import axios from 'axios';
import './Search.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Table} from 'react-bootstrap';


class SearchTable extends React.Component {
 constructor(props){
      super(props);
      this.state={
        searchs : '',
        search : []
      
      }
     }

     ChangeHandler = (e) =>{
      this.setState({[e.target.name]: e.target.value})

     }

    submitHandler = e =>{
      e.preventDefault();
      axios
      .get(`https://api.github.com/search/users?q=${this.state.searchs}`)
        .then(response =>{
          this.setState({search : response.data.items})
        })
        .catch(error => {
          console.log(error)
        })
    }


  render() {
    const {searchs} = this.state
    return (
     <div> 
      <form onSubmit={this.submitHandler}>
        <div>
          <input type="text" name='searchs' value={searchs} onChange={this.ChangeHandler} />
           </div> 
             <button type='submit'>Search</button>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Login</th>
                    </tr>
                  </thead>
                   {this.state.search.map((s) => (
                    <tbody>
                      <tr>
                        <td>{s.id}</td>
                        <td>{s.login}</td>  
                      </tr> 
                    </tbody>     
                   ))
                   }
                </Table>  
      </ form>
      </div>
    );
  }
}
export default SearchTable