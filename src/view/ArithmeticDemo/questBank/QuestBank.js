import React from 'react';
import {Route, Switch} from "react-router-dom";
import QuestBankHome from "./QuestBankHome";
import Quest1 from "./control/Quest1";
import Quest2 from "./control/Quest2";
import Quest3 from "./control/Quest3";
import Quest4 from "./control/Quest4";
import Quest5 from "./control/Quest5";
import Quest6 from "./control/Quest6";

function QuestBank(props) {
    return <Switch>
        <Route path='/arithmetic/questBank/1' component={Quest1}/>
        <Route path='/arithmetic/questBank/2' component={Quest2}/>
        <Route path='/arithmetic/questBank/3' component={Quest3}/>
        <Route path='/arithmetic/questBank/4' component={Quest4}/>
        <Route path='/arithmetic/questBank/5' component={Quest5}/>
        <Route path='/arithmetic/questBank/6' component={Quest6}/>
        <Route component={QuestBankHome}/>
    </Switch>
}

export default QuestBank;