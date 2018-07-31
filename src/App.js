import React, { Component } from "react";
import "./App.css";
import { Container, Button } from "reactstrap";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Spinner from "react-spinkit";
import InfiniteScroll from "react-infinite-scroller";

import TEST_DATA from "./now_playing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    // const timeout = ms => new Promise(res => setTimeout(res, ms));
    let url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8c54b08b120d2d59bdffb9c090467daa";
    let response = await fetch(url);
    let data = await response.json();
    // await timeout(3000);
    this.setState({
      movies: data.results,
      isLoading: false
    });
  }

  filterMovies(text) {
    let moviesCopy = TEST_DATA.results;
    let results = moviesCopy.filter(movie =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({
      movies: results
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          {this.state.isLoading ? (
            <Spinner name="pacman" color="purple" />
          ) : (
            <div>
              <SearchBar
                handleChange={searchText => this.filterMovies(searchText)}
              />
              <MovieList movies={this.state.movies} />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
