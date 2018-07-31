import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class MovieList extends Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.movies.map(movie => (
          <Movie {...movie} key={movie.id} />
        ))}{" "}
      </div>
    );
  }
}

export default MovieList;

const Movie = ({ title, release_date, overview, poster_path }) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          style={{ height: 150, objectFit: "cover" }}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{release_date}</CardSubtitle>
          <CardText> {overview}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
