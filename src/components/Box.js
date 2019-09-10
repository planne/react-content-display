import React from 'react';

export class Box extends React.Component {
    render() {
        const { content } = this.props;

        return (
            <div
                id={content.id}
                className="card col-sm-12 col-lg-3">
                <img className="card-img-top"
                    src="https://via.placeholder.com/480x240.png"
                    alt={content.thumbnail.name} />
                <div className="card-body">
                    <h4 className="card-title">{content.title}</h4>
                    <p className="card-text text-ellipsis">{content.content}</p>
                </div>
            </div>
        )
    }
}