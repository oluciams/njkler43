import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {posts.map((post,index)=>
          <li key={index}>
            <a href={post.url}><img src={post.image } /></a>
            <p>{ post.title }</p>
          </li>)
          }
        </ul>
      </div>
    )
  }
}


export default App


