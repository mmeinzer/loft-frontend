import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlToAdd: '',
      apartments: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const aptsRef = firebase.database().ref('apts');
    aptsRef.on('value', (snapshot) => {
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
          });
        }
        this.setState({
          apartments: newState,
        });
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { urlToAdd } = this.state;
    const urlRe = /https?:\/\/www.apartments.com\/.+\/.+/;
    if (urlRe.test(urlToAdd)) {
      const aptsRef = firebase.database().ref('apts');
      aptsRef.push({
        url: urlToAdd,
        address: '',
        name: '',
        neighborhood: '',
      });
      this.setState({
        urlToAdd: '',
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Welcome to Loft</h1>
        </header>
        <form className="urlSubmit" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.urlToAdd}
            type="text"
            name="urlToAdd"
            placeholder="Enter an apartment URL"
          />
          <button className="submit">Add Apartment</button>
        </form>
        <div className="apartments">
          <ul>{this.state.apartments.map(item => <li key={item.id}>{item.url}</li>)}</ul>
        </div>
      </div>
    );
  }
}

export default App;
