import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3 mx-1">
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
            <h5 className="card-title">
              {title}...
              <span
                className="position-absolute translate-middle badge rounded-pill bg-success text-light"
                style={{ left: "50%", zIndex: `1`, bottom: "96%" }}
              >
                {!source ? "Unknown" : source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm "
              rel="noreferrer "
            >
              Read More
            </a>

            <p
              className="card-text"
              style={{
                margin: `10px 0px 0px 0px`,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              <small className="text-muted">
                By:- {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItems;
