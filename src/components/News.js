import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      console.log("khatam bye bye");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>News Insight - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 44) : ""}
                  description={
                    element.description ? element.description.slice(0, 75) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between my-5">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              <i className="mx-2 fas fa-long-arrow-alt-left"></i>Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              // disbaled={
              //   this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              // }
            >
              Next
              <i className="mx-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
