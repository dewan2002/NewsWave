import React, { Component } from "react";
import Loading from "./Loading";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=117f123c1b5b41c29a56da9a67668af1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "20px 0px" }}>
            DailyNews - Top {this.capitalize(this.props.category)} Headlines
          </h2>
          {/* {this.state.loading && <Loading />} */}
          <div className="row my-3">
            {this.state.articles.map((element) => {
                return (
                  <div className="col-lg-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} sourceUrl={element.url} source={element.source.name} time={element.publishedAt} author={element.author} />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
              {" "}
              &larr; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
