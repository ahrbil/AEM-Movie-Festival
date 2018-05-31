import React, { Component } from 'react';

class Trailer extends Component {
  state = {
    trailer: {},
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id.split("-").pop()
        }/videos?api_key=${process.env.REACT_APP_TMDB_ID}`,
      );
      const videoRes = await res.json();
      const trailers = [...videoRes.results];
      const trailer = trailers.filter(t => t.site === 'YouTube' && t.type === 'Trailer')[0];
      // eslint-disable-next-line
      this.setState({
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
