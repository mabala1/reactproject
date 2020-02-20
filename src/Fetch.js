import React from 'react';

export const placeRequest = (request,url,succesCallback,errorCallback) =>{
	fetch("https://mdev-ws.kgi.sg/shield-console/Config/1.0.0",{
		method: 'POST',
		headers: {
      		'Content-Type': 'application/json'
      		// 'Content-Type': 'application/x-www-form-urlencoded',
    	},
    	body: JSON.stringify(request)
	}).then((res)=>{
		return res.json();
	}).then((body)=>{
		if(body.response.infoID !== "0"){
			throw new Error(body.response.infoMsg)
		}

		succesCallback(body)
	}).catch((error)=>{
		errorCallback(error)
	})
}