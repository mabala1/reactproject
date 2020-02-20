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


class Search extends React.Component {
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
	          {this.state.search.map((s) => (
	          	<Card  variant="outlined" style={{ width: '18rem' }}> 
                <Grid  container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                   <Grid>{s.id}</Grid>
                  <Grid>{s.login}</Grid>  
                </Grid> 
               </Card>     
	          ))
	      }
	     
         </ form>

      </div>
    );
  }
}
export default Search