import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; //impt
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 3,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      console.log("khatam bye bye");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&apiKey=193f9cca9f084044a67aa03f114316c8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <div className="text-center my-2">
          <h2 style={{ margin: `25px` }}>News Insight - Breaking News</h2>
          {this.state.loading && <Spinner />}
          {/* {this.state.loading} yadi true hai toh spinner ko dikhaye */}
        </div>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 75)
                        : ""
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
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
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
