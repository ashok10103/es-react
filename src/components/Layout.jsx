import React, { Component } from 'react'
import Facets from '../Containers/Facets';

class Layout extends Component {
  render() {
    return (
      <div>
          <div>
           <button type="submit"><i className="fa fa-search"></i></button>
          <input type="text" placeholder="Search.." name="search" />          
          </div>
          <Facets/>
      </div>
    )
  }
}

export default Layout;