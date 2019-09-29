import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './mainPanel.less';
import LeftMenu from './LeftMenu';
import myProjectRouter from './myProject/MyProjectRouter';
import WorkRouter from './work/WorkRouter'
import ReactRouter from "./reactDemo/ReactRouter";
import ESRouter from './esDemo/ESRouter';
import ComponentRouter from "./componetentDemo/ComponentRouter";
import HttpRouter from "./httpDemo/HttpRouter";
import DesignPatternRouter from "./designPattern/DesignPatternRouter";
import CssTestRouter from "./cssDemo/CssTestRouter";
import ReconsitutionRouter from "./reconsitution/ReconsitutionRouter";
import {setCombinKey} from "../utils/CombinKey";
import {Message} from "../component";
import RouterRouter from "./routerDemo/RouterRouter";
import ArithmeticDemo from "./ArithmeticDemo/ArithmeticDemo";

function MainPanel(props){
    // const fn = ()=>props.history.push('/demo');

    const fn = ()=>Message.show({info:'组合键功能测试',icon:'success'});
    setCombinKey([68,74],fn);//D J

    return <div className='mainPanel' style={{'overflow':'hidden'}}>
        <LeftMenu/>
        <div className="mainPanel_content" style={{'overflow':'auto'}}>
            <Switch>
                <Route path='/work' component={WorkRouter}/>
                <Route path='/component' component={ComponentRouter}/>
                <Route path='/react' component={ReactRouter}/>
                <Route path='/es' component={ESRouter}/>
                <Route path='/router' component={RouterRouter}/>
                <Route path='/http' component={HttpRouter}/>
                <Route path='/design' component={DesignPatternRouter}/>
                <Route path='/css' component={CssTestRouter}/>
                <Route path='/mProj' component={myProjectRouter}/>
                <Route path='/recons' component={ReconsitutionRouter}/>
                <Route path='/arithmetic' component={ArithmeticDemo}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}

export default MainPanel;