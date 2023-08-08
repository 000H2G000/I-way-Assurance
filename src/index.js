import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Provider} from 'react-redux'
import {store} from './redux/store'

ReactDOM.render(
    <Provider store={store}>
 <Router>
        <App />
    </Router>
    </Provider>,
   
    document.getElementById("root")
);
