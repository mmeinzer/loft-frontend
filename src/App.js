import React, { Component } from "react";
import "./App.css";
import { database } from "./firebase";

import Header from "./components/Header";
import UrlSubmissionForm from "./components/UrlSubmissionForm";
import ApartmentsList from "./components/ApartmentsList";

class App extends Component {
  state = {
    urlToAdd: "",
    apartments: []
  };

  aptsRef = database.ref('clientData')

  componentDidMount() {
    this.aptsRef.on("value", snapshot => {
      const apts = snapshot.val();
      if (apts) {
        const newState = [];
        for (const key in apts) {
          newState.push({
            id: key,
            url: apts[key].url,
            address: apts[key].address,
            name: apts[key].name,
            neighborhood: apts[key].neighborhood,
            units: apts[key].units
          });
        }
        this.setState({
          apartments: newState
        });
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isValidUrl = urlToCheck =>
    /https?:\/\/www\.apartments\.com\/[\w-]+\/\w{7}\/?$/.test(urlToCheck);

  handleSubmit = e => {
    e.preventDefault();
    const { urlToAdd, apartments } = this.state;
    const urlInDatabase = apartments.map(apt => apt.url).includes(urlToAdd);
    if (!urlInDatabase && this.isValidUrl(urlToAdd)) {
      this.aptsRef.push({
        url: urlToAdd,
        address: "",
        name: "",
        neighborhood: ""
      });
      this.setState({
        urlToAdd: ""
      });
    }
  };

  removeApartment = (id) => {
    this.aptsRef.child(id).set({})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UrlSubmissionForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          urlToAdd={this.state.urlToAdd}
          currentApts={this.state.apartments}
        />
        <ApartmentsList apartments={this.state.apartments} removeApartment={this.removeApartment} />
      </div>
    );
  }
}

export default App;
