import { Component } from 'react';

import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'


import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookList books={this.state.books}/>
        <Shelf />
      </div>
    ); 
    }
}