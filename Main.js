import {useState} from "react";
import React from "react";
import store from "./redux/Store.json";
import Second from "./Catalog";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addtoCart} from './redux/cartSlice';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import style from "./module.Coursestyle.css";

function Main(){
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
	let a=store.goods;
	function Search(a){
		const dispatch=useDispatch();
		var a=store.goods.filter((item) => {
    if (
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
        })
        return (
         <div className="cover">
         	{	
         		a.map((item)=>{return(
         			<div className="item">
					<div className="list">
						<div key={item.id}>
							<p>{item.name}</p>
							<p>{item.price}</p>
							
						</div>	
						<button className="crt" onClick={()=>dispatch(addtoCart({name}))}>add to cart</button>
					</div>
				</div>)})
				
			}
		</div>

        );
     
	}
	function Header(){
		const cartItems=useSelector(state=>state.cart.cart)
		return(
			<div className="display">
			<h1 className="boob">Mebelmarket <h4><Link to="/cart">Cart{cartItems.length}</Link></h4> </h1>
			

			</div>


			)
	}
	return(
		<div>
		{Header()}
		{Button()}
		{Text()}
		{Search(a)}
		</div>



		)
} 
export default Main