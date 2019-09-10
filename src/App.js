import React from 'react';
import { Board } from './components/Board';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export class App extends React.Component {
    render() {
        return (
            <div className="wrap">
                <div className="container pt-3 pb-3">
                    <Board />
                </div>
            </div>
        )
    }
}
