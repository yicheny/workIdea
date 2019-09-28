import React, {PureComponent,Fragment} from 'react';
import { Route } from 'react-router-dom';
import MainPanel from './view/MainPanel';

class App extends PureComponent {
    render() {
        return <Fragment>
                    {/*<AppBar/>*/}
                    <Route component={MainPanel}/>
            </Fragment>
    }
}

export default App;