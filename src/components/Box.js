import React from 'react';

export class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { content } = this.props;

        return (
            <div className="" id={content.id}>{content.title}</div>
        )
    }
}