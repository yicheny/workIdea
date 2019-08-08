import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../asset/style/View/mainPanel.less';
import LeftMenu from './LeftMenu';
import myProjectRouter from './myProject/MyProjectRouter';
import Work from './business/WorkHome'
import ReactRouter from "./reactTest/ReactRouter";
import ESHome from './esTest/ESHome';
import RouterHome from './router/RouterHome';
import ComponentTestHome from "./componetentTest/.ComponentTestHome";
import HttpRouter from "./httpTest/HttpRouter";
import DesignPatternRouter from "./designPattern/DesignPatternRouter";
import CssTestRouter from "./cssTest/CssTestRouter";

function MainPanel(){
    return <div className='mainPanel'>
        <LeftMenu className='mainPanel_leftMenu'/>
        <div className="mainPanel_content">
            <Switch>
                <Route path='/wDemo' component={Work}/>
                <Route path='/cDemo' component={ComponentTestHome}/>
                <Route path='/rDemo' component={ReactRouter}/>
                <Route path='/es' component={ESHome}/>
                <Route path='/router' component={RouterHome}/>
                <Route path='/http' component={HttpRouter}/>
                <Route path='/design' component={DesignPatternRouter}/>
                <Route path='/cssTest' component={CssTestRouter}/>
                <Route path='/mProj' component={myProjectRouter}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}

export default MainPanel;