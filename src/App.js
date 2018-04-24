import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";

import UrlSubmissionForm from "./components/UrlSubmissionForm";
import ApartmentsList from "./components/ApartmentList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlToAdd: "",
      apartments: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const aptsRef = firebase.database().ref("apts");
    aptsRef.on("value", snapshot => {
      const apts = snapshot.val();
      if (apts) {
        const newState = [];
        for (const key in apts) {
          newState.push({
            id: key,
            url: apts[key].url,
            address: apts[key].address,
            name: apts[key].name,
            neighborhood: apts[key].neighborhood
          });
        }
        this.setState({
          apartments: newState
        });
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidUrl = urlToCheck =>
    /https?:\/\/www\.apartments\.com\/[\w-]+\/\w{7}\/?$/.test(urlToCheck);

  handleSubmit(e) {
    e.preventDefault();
    const { urlToAdd } = this.state;
    if (this.isValidUrl(urlToAdd)) {
      const aptsRef = firebase.database().ref("apts");
      aptsRef.push({
        url: urlToAdd,
        address: "",
        name: "",
        neighborhood: ""
      });
      this.setState({
        urlToAdd: ""
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Flat Finder</h1>
        </header>
        <UrlSubmissionForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          urlToAdd={this.state.urlToAdd}
        />
        <ApartmentsList apartments={this.state.apartments} />
      </div>
    );
  }
}

export default App;
