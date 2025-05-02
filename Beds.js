import {useState} from "react";
import React from "react";
import store from "./redux/Store.json";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


export default function  Beds(){
	const [count,setCount]=useState(0);
	const [name,setName]=useState("");
	const [search,setSearch]=useState("");
	function Catalog(){

		return(
<div className="cover">
	<div className="item">
		{			store.goods.map((gd)=>(
					<div className="list">
						<div key={gd.id}>
							<p>{gd.name}</p>
							<p>{gd.price}</p>
						</div>	

					</div>


					))}
	</div>
</div>)
	}
	function Button(){
		return(
			<div className="cover">
				<div className="Catalog">
				<Link to="/second" style={{ textDecoration: 'none', color: 'white'}}>Каталог</Link>
				</div>
			</div>
			)
	}
	function Text(){
		return(
		
			<div className="Button">

			<input align="right" type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
			</div>
			)
	}
	function Search(){
		var b=store.goods.filter((item) => {
    if (
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
        })
        return (
         <div className="cover">
         	{	
         		b.map((item)=>{return(
         			<div className="item">
					<div className="list">
						<div key={item.id}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>	

					</div>
				</div>)})
				
			}
		</div>

        );
     
	}
	function Header(){

		return(
			<h1 className="boob">Mebelmarket</h1>


			)
	}
	return(
		<div>
		{Header()}
		{Button()}
		{Text()}
		{Search()}
		</div>



		)
} 
