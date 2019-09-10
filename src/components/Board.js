import React from 'react';
import { Box } from './Box';
import { Loader } from './Loader';

import Strapi from 'strapi-sdk-javascript/build/main';

const strapiLocalhost = 'http://localhost:1337';
const strapi = new Strapi(strapiLocalhost);

export class Board extends React.Component {
  state = {
    posts: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const posts = await strapi.getEntries('articles');
      this.setState({ loading: false });
      this.setState({ posts });
    }
    catch (err) {
      alert(err);
    }
  }

  render() {
    const { posts, loading } = this.state;

    if (loading) {
      return <Loader />
    }

    return (
      <div className="row">
        {posts.map(item => {
          return <Box key={item.id} content={item} imageUrl={`${strapiLocalhost}${item.thumbnail.url}`}></Box>
        })}
      </div>
    );
  }
}