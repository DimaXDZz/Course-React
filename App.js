import logo from './logo.svg';
import Main from './Main.js';
import Second from "./Catalog.js";
import Beds from "./Beds.js";
import Tables from "./Tables.js";
import Room from "./Room.js";
import Card from "./Card.js";
import store from './redux/store.js';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import {Provider} from "react-redux"
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/second" element={<Second />} />
        <Route path="/cart" element={<Card />} />
         <Route path="/beds" element={<Beds />} />
         <Route path="/tables" element={<Tables />} />
         <Route path="/room" element={<Room />} />
        <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>  
    </Provider>
  );
}

export default App;
