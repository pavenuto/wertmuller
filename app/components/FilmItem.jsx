import React from 'react';
import TweenLite from 'gsap';

export default class FilmItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  componentDidMount() {
    TweenLite.fromTo(this.refs.film, .6, {
      opacity: 0
    }, {
      delay: this.props.index / 5,
      opacity: 1,
      ease: Quad.easeInOut
    })
  }
  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    const active = this.state.isActive;
    const activeClass = active ? ' is-active' : '';
    return (
      <article ref='film' id={`film-${this.props.index}`} className={'film' + activeClass} key="{this.props.id}"  onClick={this.handleClick.bind(this)}>
        {this.props.img && <img className="film__img" src={`/img/${this.props.img}`} /> }
        <h3 className="film__title">{this.props.title}</h3>
        <div className="film__meta">({this.props.year}, {this.props.director})</div>
      </article>
    );
  }
}