import React, { Component } from 'react';
import Posts from './components/Posts';
import Footer from './components/Footer';
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://192.168.1.22:3030/api/') //to be replaced!!
    .then((res) => {
      const dat = res.data;
      this.setState({ posts: dat });
    })
    .catch(console.log);
  }

  render() {
    return (
      //use Bootstrap container for card display
      <div className = "container"> 
        <Posts posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
