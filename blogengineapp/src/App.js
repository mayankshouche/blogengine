import React, { Component } from 'react';
import Posts from './components/Posts'
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:3030/api/')
    .then((res) => {
      const dat = res.data;
      this.setState({ posts: dat });
    })
    .catch(console.log);
  }

  render() {
    return (
      <Posts posts={this.state.posts} />
    );
  }
}

export default App;
