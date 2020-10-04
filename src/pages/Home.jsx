import React, { Component, Fragment } from "react";
import Loader from "../components/Loader";
import { FaBeer } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import "../styles/pages/home.scss";

export default class Home extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: { info: null, results: [] },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await res.json();
      this.setState({
        nextPage: this.state.nextPage + 1,
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
      });
      console.log(this.state.data.results);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.error) {
      return <h1>ERROR {this.state.error.message} </h1>;
    }

    return (
      <Fragment>
        <main className="home">
          {this.state.data.results.map((character) => {
            return (
              <div className="card" key={character.id}>
                <a href="">
                  <figure>
                    <img
                      className="card__img"
                      src={character.image}
                      alt={character.name}
                    />
                    <figcaption className="card__caption">
                      {character.name}
                      <span className="card__caption--icon">
                        <FaSearch />
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
            );
          })}
          {!this.state.loading && (
            <button onClick={() => this.fetchData()}>Load More</button>
          )}
        </main>
      </Fragment>
    );
  }
}
