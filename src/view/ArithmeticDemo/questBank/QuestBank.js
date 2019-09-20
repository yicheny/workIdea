import React from 'react';
import {Route, Switch} from "react-router-dom";
import QuestBankHome from "./QuestBankHome";
import Quest1 from "./control/Quest1";
import Quest2 from "./control/Quest2";

function QuestBank(props) {
    return <Switch>
        <Route path='/arithmetic/questBank/1' component={Quest1}/>
        <Route path='/arithmetic/questBank/2' component={Quest2}/>
        <Route component={QuestBankHome}/>
    </Switch>
}

export default QuestBank;