import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./componentes/Error404";


function App() {
  return (
        <div >      
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>           
          </BrowserRouter>
          


         
        </div>
  );
}

export default App;