import React from "react";
import "./Detail.css"

class Detail extends React.Component {
  componentDidMount(){
    const { location, history } = this.props;
    if (location.state === undefined){
      history.push("/");
    }
  }
  render(){
    const { location } = this.props;
    if (location.state) {
    return (
      <>
        <div className="detail">
          <figure>
            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          </figure>
          <ul className="genres">
            {location.state.genres.map((genre, index) => (
              <li key={index} className="genre">{genre}</li>
            ))}
          </ul>
          <p className="title">title: {location.state.title}</p>
          <p className="summary">summary: {location.state.summary}</p>
        </div>
      </>
      );
    } else {
      return null;
    }
  }
}

export default Detail;