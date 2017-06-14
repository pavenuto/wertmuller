import React from 'react';
import FilmItem from './FilmItem';

export default class FilmList extends React.Component {
  render() {
   const films = this.props.films.map((film, index) => {
      return (
        <FilmItem
          key={index}
          title={film.title}
          year={film.year}
          director={film.director}
          img={film.img}
          index={index}
        />
      )
   });
   return (
      <div className='filmList'>
       {films}
      </div>
   )
  }
}