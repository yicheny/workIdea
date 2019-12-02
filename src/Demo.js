import React from 'react';
import {Button} from "./component";
// import * as ylf from 'ylf_public_fun/publicFun';

function Child(props) {
    return <div>
        <Button type='primary' onClick={props.onClick}>Child</Button>
    </div>
}

function Control(props) {
    const {Opt} = props;

    return <div>
        {Opt}
    </div>
}

function Demo(props) {
    

    return <div>
        {Control({
            Opt:<Child onClick={()=>console.log('click')}/>
        })}
        </div>;
}

export default Demo;