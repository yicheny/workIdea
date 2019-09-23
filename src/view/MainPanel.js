import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../asset/style/View/mainPanel.less';
import LeftMenu from './LeftMenu';
import myProjectRouter from './myProject/MyProjectRouter';
import WorkRouter from './work/WorkRouter'
import ReactRouter from "./reactTest/ReactRouter";
import ESRouter from './esTest/ESRouter';
import ComponentRouter from "./componetentTest/ComponentRouter";
import HttpRouter from "./httpTest/HttpRouter";
import DesignPatternRouter from "./designPattern/DesignPatternRouter";
import CssTestRouter from "./cssTest/CssTestRouter";
import ReconsitutionRouter from "./reconsitution/ReconsitutionRouter";
import {setCombinKey} from "../utils/CombinKey";
import {Message} from "../component";
import RouterRouter from "./routerTest/RouterRouter";
// import HugeSuraDemoRouter from "./HugeSuraDemo/HugeSuraDemoRouter";
import ArithmeticDemo from "./ArithmeticDemo/ArithmeticDemo";

function MainPanel(props){
    // const fn = ()=>props.history.push('/demo');

    const fn = ()=>Message.show({info:'组合键功能测试',icon:'success'});
    setCombinKey([68,74],fn);//D J

    return <div className='mainPanel'>
        <LeftMenu className='mainPanel_leftMenu'/>
        <div className="mainPanel_content">
            <Switch>
                <Route path='/work' component={WorkRouter}/>
                <Route path='/component' component={ComponentRouter}/>
                <Route path='/react' component={ReactRouter}/>
                <Route path='/es' component={ESRouter}/>
                <Route path='/router' component={RouterRouter}/>
                <Route path='/http' component={HttpRouter}/>
                <Route path='/design' component={DesignPatternRouter}/>
                <Route path='/cssTest' component={CssTestRouter}/>
                <Route path='/mProj' component={myProjectRouter}/>
                <Route path='/recons' component={ReconsitutionRouter}/>
                {/*<Route path='/hugeSura' component={HugeSuraDemoRouter}/>*/}
                <Route path='/arithmetic' component={ArithmeticDemo}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}

export default MainPanel;