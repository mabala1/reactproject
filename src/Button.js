import React from 'react';

class Button extends React.Component{
	
	constructor(props){
      super(props);
      this.state={
      	name : this.props.name
      }
     }

//     UNSAFE_componentWillReceiveProps(newProps,preProps){
 //    	this.setState({
//     	name:newProps.name
//     	})
//     }
	

	static getDerivedStateFromProps(props, state){
		if(props.name !== state.name){
			return {
				name : props.name
			}
		}
		return null;
	}

	componentDidUpdate(){
		console.log(this.state.name)
	}

     render(){
      return(
            <button onClick={this.props.onClick}> {
            	this.state.name
            }</button>


            )

       }

};

export default Button;