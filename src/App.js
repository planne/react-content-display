import React from 'react';
import { Board } from './components/Board';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    state = {
        content: [
            { "id": "1", "title": "title 1" },
            { "id": "2", "title": "title 2" }
        ]
    }
    actions = {
        setState: (state, callback) => this.setState(state, callback)
    }
    render() {
        const state = this.state;

        return (
            <div className="wrap">
                <div className="container">
                    <Board content={state.content} />
                </div>
            </div>
        )
    }
}
