import React, { Component } from 'react';
import styled from 'styled-components';

class Trailer extends Component {
  state = {
    loading: true,
    trailer: {},
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/videos?api_key=abd82c60cb3ee473e5d38d6e8a90cfa6`,
      );
      const videoRes = await res.json();
      const trailers = [...videoRes.results];
      const trailer = trailers.filter(t => t.site === 'YouTube' && t.type === 'Trailer')[0];
      // eslint-disable-next-line
      this.setState({
        loading: false,
        trailer,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
        <iframe
          title={this.state.trailer.name}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${this.state.trailer.key}`}
          style={{ border: 'none' }}
        />
    );
  }
}
export default Trailer;
