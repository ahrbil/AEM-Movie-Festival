import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Page404 from './Pages/404';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail';
import MoviesList from './Pages/MoviesList';
import ScrollTop from './Components/ScrollTop';

class App extends Component {
  state = {
    movies: [],
    totalPages: null,
    page: 1,
    hasmore: true,
    loading: true,
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=1`,
      );
      const movies = await res.json();
      // eslint-disable-next-line
      this.setState({
        movies: movies.results,
        totalPages: movies.total_pages,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  loadMovies = () => {
     fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${
        this.state.page
      }`,
    )
      .then(movies => movies.json())
      .then((movies) => {
        this.setState({
          movies: [...this.state.movies, ...movies.results],
          hasmore: true,
          
        });
      })
      .catch(e => console.log(e));
  };
  loadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        hasmore: false,
        
      },
      this.loadMovies,
    );
  };
  render() {
    return (
      <Router>
        <ScrollTop>
          <div className="App">
            <Header {...this.props} />
            <section className="App-section">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Home {...props} movies={this.state.movies} />}
                />
                <Route
                  exact
                  path="/movies"
                  render={() => (
                    <MoviesList
                      movies={this.state.movies}
                      load={this.loadMore}
                      hasmore={this.state.hasmore}
                      totalPages={this.state.totalPages}
                      loading={this.state.loading}
                    />
                  )}
                />
                <Route path="/movies/:id" render={props => <MovieDetail {...props} />} />
                <Route component={Page404} />
              </Switch>
            </section>
          </div>
        </ScrollTop>
      </Router>
    );
  }
}

export default App;
