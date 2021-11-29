import React, { useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
// import data from "./dataSource.json";
import "./App.css";
import LogIn from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">

      {/* <GridComponent dataSource={data}/> */}
       <Switch >
          <Route exact path="/" component={LogIn} />
          <Provider store={store}>

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/details" component={Details} />

          </Provider>

      </Switch >

    </div>
  );
}

export default App;
