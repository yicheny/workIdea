import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './mainPanel.less';
import LeftMenu from './LeftMenu';
import myProjectRouter from './myProject/MyProjectRouter';
import WorkRouter from './work/WorkRouter'
import ReactDemo from "./reactDemo/ReactDemo";
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
import HugeSuraDemoRouter from "./HugeSuraDemo/HugeSuraDemoRouter";
import Bg from "../component/BG/BG";
import {mergeCn} from "../utils/publicFun";

function MainPanel(props){
    const {theme} = props;

    useEffect(()=>{
        const fn = ()=>Message.show({info:'组合键功能测试',icon:'success'});
        setCombinKey([68,74],fn);//D J
    },[]);

    return <div className={mergeCn('mainPanel','theme',theme)} style={{'overflow':'hidden'}}>
        { ['my'].includes(theme) && <Bg/>}
        <LeftMenu/>
        <div className="mainPanel_content" style={{'overflow':'auto'}}>
            <Switch>
                <Route path='/work' component={WorkRouter}/>
                <Route path='/component' component={ComponentRouter}/>
                <Route path='/react' component={ReactDemo}/>
                <Route path='/es' component={ESRouter}/>
                <Route path='/router' component={RouterRouter}/>
                <Route path='/http' component={HttpRouter}/>
                <Route path='/design' component={DesignPatternRouter}/>
                <Route path='/css' component={CssTestRouter}/>
                <Route path='/mProj' component={myProjectRouter}/>
                <Route path='/recons' component={ReconsitutionRouter}/>
                <Route path='/arithmetic' component={ArithmeticDemo}/>
                <Route path='/hugeSura' component={HugeSuraDemoRouter}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}
MainPanel.defaultProps={
    theme:'my'
};

export default MainPanel;