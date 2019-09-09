import React from 'react';
import { Box } from './Box';

export class Board extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <div className="">
        {content.map((item, index) => {
          return <Box key={item.id} content={item}></Box>
        })}
      </div>
    );
  }
}