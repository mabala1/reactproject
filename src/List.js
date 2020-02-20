import React from 'react';

export const List = (props) =>{
	return(
		<ul >
			{
				props.arrgjhsgdhj.map((val,ind)=>{
					return <li className="lists" key={ind}>{val}</li>
				})
			}
		</ul>
		)
}