import React, { useState } from 'react';
import posts from './posts'


function App () {

  const [searchPost, setSearchpost] = useState('');

  const handleSearchPost = (e)=>{
    let search1 = e.target.value
    setSearchpost(search1)  
  }

    return (

      <div>
        <div className="filter">
          <input
          value={searchPost} 
          onChange={handleSearchPost} type="text" placeholder="Ingresa el término de búsqueda"/>          
        </div>
        <ul>
          {posts

          .filter(post => {
            let filter = searchPost
            if(!filter) return true
            let title = post.title.toLowerCase()
            return title.includes(filter.toLowerCase())
          })
          
          
          
          .map((post,index)=>
          <li key={index}>
            <a href={post.url}><img alt={post.title} src={post.image} /></a>
            <p>{ post.title}</p>
          </li>)
          }
        </ul>
      </div>
    )  
}

export default App



