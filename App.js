//import logo from './logo.svg';
import './App.css';
import React from "react";

//import component
import FetchRecallsData from "./ajax/FetchRecallsData";

function App() {
	//get url
	const url = "https://api.fda.gov/food/enforcement.json?search=report_date:[20150101+TO+20201203]&limit=50";
	
	//call component to process url
	const result = FetchRecallsData(url, {});
	
	//store result in a variable
	const recalls = result.response;
	
	//return only the result of the "recalls" data
	const recalls1 = recalls['results'];
	
  return (
  //display the data
    <div className="App">
    <header className="App-header">
		<h1>Sample Food Products Recalls in the USA</h1>
		<hr />
      </header>

      <ul>
      {recalls1 && recalls1.map((recall) => 
       <li className="recall" key={recall.recall_number}>
      	<b>Recalling Firm: {recall.recalling_firm}</b> <br />
      	Report Date: {recall.report_date} <br />
      	Classification: {recall.classification} <br />
      	Reason for recalls: {recall.reason_for_recall} <br />
      	Product Quantity: {recall.product_quantity} <br />
      	Product Description: {recall.product_description} <br />
      	Distribution Pattern: {recall.distribution_pattern} <br />
      	Code Info: {recall.code_info} <br />
      	Voluntary/Mandated: {recall.voluntary_mandated} <br />
      	Status: {recall.status} <br />
      	<hr /><br />
      </li>
      
      )}
      </ul>
      
    </div>
  );
}

export default App;
