import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import History from "./pages/History";
import SignIn from "./pages/SignIn";
import Prescription from "./pages/Prescription";
import VerifyMedecin from "./pages/VerifyMedicine";
import ActesPharmacie from "./pages/Ordenance/ActesPharmacie";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Prescription />
            </Route>
            <Route exact path="/statistics">
                <Profile />
            </Route>
            <Route exact path="/customers">
                <History />
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams Page</h1>
            </Route>
            <Route exact path="/SignIn">
               <SignIn />
            </Route>
            <Route exact path="/ActesPharmacie">
               <ActesPharmacie />
            </Route>
            <Route exact path="/VerifyMedecin">
               <VerifyMedecin />
            </Route>
           
        </Switch>
    );
};

export default Routes;
