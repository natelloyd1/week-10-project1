import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import Comments from "./Comments";

class Articles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        data: [],
  }; }

  handleSubmit() {
        // get the values of some controlled components
        let { title, article } = this.state;
        // post data to an API
        axios.post("/api/article", {
            title: title,
            article: article,
        }).then(() => {
            // once the server responds successfully, clear the inputs
            this.setState({ title: "", article: "" });
        });
    }
    // runs when the component first renders
    componentDidMount() {
        // make the GET request
        axios.get("/articles").then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
            loaded: true,
            articles: data.data,
            });
    }); }
    
    render() {
        let { articles, loaded } = this.state;
        return !loaded ? <p>Loading...</p> : (
            <>
            <h2>My articles</h2>
            <ul className="list-group">
                { articles.map(article => (
                <li
                    key={ article.id }
                    className="list-group-item"
                >
                    <Link to={`/articles/${article.id}`}>{ article.title }</Link>
                </li>
            )) } </ul>
            </> );
    } 

}
  export default Articles;
