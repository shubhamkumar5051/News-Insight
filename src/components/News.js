import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        this is a news components
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <NewsItems
              title="title 1"
              description="wow +1"
              imgsrc="https://images.unsplash.com/photo-1630692158486-f1e2dd74142b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <NewsItems
              title="title 2"
              description="wow +2"
              imgsrc="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <NewsItems
              title="title 3"
              description="wow +3"
              imgsrc="https://images.unsplash.com/photo-1597460236680-335638265632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80"
            />
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <NewsItems
              title="title 4"
              description="wow +4"
              imgsrc="https://images.unsplash.com/photo-1557786372-6523bff1f99b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
