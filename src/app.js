import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import MainPanel from './view/MainPanel';

class App extends Component {
    render() {
        return <div>
                    {/*<AppBar/>*/}
                    <Route path='MainPanel' component={MainPanel}/>
            </div>
    }
}

export default App;