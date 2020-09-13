import React from 'react';
import './App.css';
import '@vkontakte/vkui/dist/vkui.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";
import TypePage from "./TypePage";
import MainSettings from "./MainSettings";
import OneTimeAdditional from "./OneTimeAdditional";
import FullView from "./FullView";
import Snippet from "./Snippet";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Route exact path={"/type"} component={TypePage}/>
                <Route exact path={"/onetime"} component={MainSettings("onetime")}/>
                <Route exact path={"/repetitive"} component={MainSettings("repetitive")}/>
                <Route exact path={"/additional"} component={OneTimeAdditional}/>
                <Route exact path={"/snippet"} component={Snippet}/>
                <Route exact path={"/full"} component={FullView}/>
                <Route path={"/"} component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
