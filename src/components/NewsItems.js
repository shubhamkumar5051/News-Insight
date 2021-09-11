import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: `18rem` }}>
          <img
            src={
              !imageUrl
                ? "https://images.indianexpress.com/2021/08/Apple-iPhone-12-1.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{
              background: `linear-gradient(to right,rgb(116 197 193),rgb(230 239 237))`,
            }}
          >
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItems;
