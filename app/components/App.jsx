import React from 'react';
import FilmList from './FilmList';
import FilmItem from './FilmItem';
import films from './films';

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <h2>Films by Orson Welles</h2>
        <FilmList films={films} />
      </div>
    );
  }
}
