import React, { Component } from "react";
import noImage from "./../noImageFound.jpg";
export default class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, sourceUrl, source, time, author } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex : 1 , left: '90%'}}>
           {source}
          </span>
          <img src={imgUrl ? imgUrl : noImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on {new Date(time).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={sourceUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
