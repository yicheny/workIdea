class LightState {
    switchState = ()=>console.error('子类必须重写父类switchState方法')
}

class LightOffState extends LightState{
    switchState = (light)=>{
        light.stateValue='弱光';
        light.setState(new LightWeakState());
    }
}

class LightWeakState extends LightState{
    switchState = (light)=>{
        light.stateValue='强光';
        light.setState(new LightStrongState());
    }
}

class LightStrongState extends LightState{
    switchState = (light)=>{
        light.stateValue='关灯';
        light.setState(new LightOffState());
    }
}

export default class LightContext {
    constructor(){
        this.stateValue='关灯';
        this.currState = new LightOffState();
    }

    setState = (newState) => this.currState = newState;
}