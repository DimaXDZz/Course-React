import {useState} from "react";
import React from "react";
import store from "./redux/Store.json";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


export default function  Second(){
	const [count,setCount]=useState(0);
	const [name,setName]=useState("");
	const [search,setSearch]=useState("");
	function Catalog(){

		return(
<div className="cover">
		{			store.hrefs.map((gd)=>(
					<div className="item">
					<div className="list">
						<div key={gd.id}>
							<Link to={gd.href} style={{ textDecoration: 'none', color: 'white'}}>Каталог</Link>
						</div>
					</div>	

					</div>


					))}
</div>)
	}
	function Header(){

		return(
			<h1 className="boob">Mebelmarket</h1>


			)
	}

	return(

		<div>
		{Header()}
		{Catalog()}
		</div>

		)
}
