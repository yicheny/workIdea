import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../asset/style/View/mainPanel.less';
import LeftMenu from './LeftMenu';
import Game from './game/Game';
import Demo from './Demo'
import Work from './business/WorkHome'
import ReactHome from "./reactTest/ReactHome";

function MainPanel(){
    return <div className='mainPanel'>
        <LeftMenu className='mainPanel_leftMenu'/>
        <div className="mainPanel_content">
            <Switch>
                <Route path='/wDemo' component={Work}/>
                <Route path='/game' component={Game}/>
                <Route path='/cDemo' component={Demo}/>
                <Route path='/rDemo' component={ReactHome}/>

                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}

export default MainPanel;