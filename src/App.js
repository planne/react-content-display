import React from 'react';
import { Board } from './components/Board';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    state = {
        content: []
    }
    render() {
        const state = this.state;

        return (
            <div className="wrap">
                <div className="container">
                    <Board />
                </div>
            </div>
        )
    }
}
