import React, { Component } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '@atlaskit/spinner';


import Movie from '../Components/Movie';

class MoviesList extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loader><Spinner size="large" /></Loader>
        ) : (
          <InfiniteScroll
            threshold={60}
            loadMore={this.props.load}
            hasMore={this.props.hasmore}
            loader={<Loader><Spinner size="large" /></Loader>}
          >
            <MovieGrid ref={this.scroller} onScroll={this.handleScroll} key={0}>
              {this.props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

const MovieGrid = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const Loader = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default MoviesList;
