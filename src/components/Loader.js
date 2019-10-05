import React from 'react';

export class Loader extends React.Component {
    render() {
        return (
            <div className="loader text-center  vertical-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}