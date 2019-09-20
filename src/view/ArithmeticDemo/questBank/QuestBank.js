import React from 'react';
import {Route, Switch} from "react-router-dom";
import Quest1 from "./control/Quest1";
import QuestBankHome from "./QuestBankHome";

function QuestBank(props) {
    return <Switch>
        <Route path='/arithmetic/questBank/1' component={Quest1}/>
        <Route component={QuestBankHome}/>
    </Switch>
}

export default QuestBank;