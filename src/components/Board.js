import React from 'react';
import { Box } from './Box';

import Strapi from 'strapi-sdk-javascript/build/main';
const strapi = new Strapi('http://localhost:1337');

export class Board extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    try {
      const posts = await strapi.getEntries('articles');
      this.setState({ posts });
    }
    catch (err) {
      alert(err);
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="">
        {posts.map(item => {
          return <Box key={item.id} content={item}></Box>
        })}
      </div>
    );
  }
}