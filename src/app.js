import React, {PureComponent,Fragment} from 'react';
import { Route } from 'react-router-dom';
import MainPanel from './view/MainPanel';
import setting from "./setting";

class App extends PureComponent {
    render() {
        return <Fragment>
                    {/*<AppBar/>*/}
                    <Route  render={()=><MainPanel {...setting}/>} />
            </Fragment>
    }
}

export default App;