import React, { Component } from "react";
import "./App.css";
import { database } from "./firebase";

import Header from "./components/Header";
import UrlSubmissionForm from "./components/UrlSubmissionForm";
import ApartmentsList from "./components/ApartmentsList";
import UnitDetails from "./components/UnitDetails";

class App extends Component {
  state = {
    urlToAdd: "",
    apartments: [],
    unitsIndex: -1,
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

  showUnits = (index) => {
    this.setState({unitsIndex: index})
  }

  hideUnits = () => {
    this.setState({unitsIndex: -1})
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
        <ApartmentsList 
          apartments={this.state.apartments}
          removeApartment={this.removeApartment}
          showUnits={this.showUnits}
        />
        <UnitDetails
          units={this.state.unitsIndex + 1 ? this.state.apartments[this.state.unitsIndex].units : null}
          hideUnits={this.hideUnits}
        />
      </div>
    );
  }
}

export default App;
