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
import ReconsitutionRouter from "./reconsitution/ReconsitutionRouter";
import _ from 'lodash';

class SingleTon {
    constructor(fn){
        this.fn = fn;
    }

    executor(){
        if(this.fn){
            this.fn();
        }
    }
}

const ProxySingleTon = (()=>{
    let instance;
    return function (fn) {
        if(!instance){
            instance = new SingleTon(fn);
            return instance.executor();
        }
        return ()=>{}
    }
})();

class CombinKey{
    constructor(appointKeys=[],receiver=null){
        this.appointKeys = appointKeys;
        this.keys = [];
        this.receiver = receiver;
        this.timeId = null;
    }

    keysAutoClear(){
        this.timeId = setInterval(()=>{
            this.keys = [];
        },300)
    }

    add(keyCode){
        clearInterval(this.timeId);
        if(this.keys.length === 0) this.keysAutoClear();
        if(this.keys.length>=this.appointKeys.length){
            this.keys.shift();
        }
        this.keys.push(keyCode);
    }

    executor() {
        if (!this.keys.length) return;
        if (_.uniq(this.keys).length === this.appointKeys.length){
            const flag = this.keys.every(el=>this.appointKeys.includes(el));
            if(flag){
                console.log('组合键成功');
                if(this.receiver) this.receiver();
                this.keys = [];
                clearInterval(this.timeId);
            }
        }
    }
}

function MainPanel(props){

    const keyEvent = ()=>{
        document.addEventListener('keydown',(e)=>{
            combinKeys.add(e.keyCode);
            combinKeys.executor();
        });
    };
    const event = new ProxySingleTon(keyEvent);

    const fn = ()=>props.history.push('/demo');
    const combinKeys = new CombinKey([68,74],fn);//D J

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
                <Route path='/recons' component={ReconsitutionRouter}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </div>
    </div>
}

export default MainPanel;