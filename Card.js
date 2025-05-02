import {useSelector,useDispatch} from "react-redux";
import {removefromCart} from "./redux/cartSlice";
import store from "./redux/Store.json";
function Card(){

	const cartitems=useSelector(state=>state.cart.cart)
	const dispatch=useDispatch()
	return(
		<div>
			<h2>Cart</h2>
			{

				cartitems.map(item=>{
					return(

					<div>
						<div>
						<h3>{item.price}</h3>
							<button onClick={()=>dispatch(removefromCart({id:item.id}))}>Remove</button>
						</div>
					</div>


					)


				})
			}

		</div>

		);

}
export default Card;