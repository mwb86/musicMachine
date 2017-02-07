import React, {Component} from 'react'
// import {Link} from 'react-router'
import logo from '../logo.svg';
class Header extends Component{
  render(){
    return (
      <header id="bla">
      <h1>Music Machine</h1>
      <img src={logo} className="animated infinite bounce App-logo" alt="logo" />

      </header>
    )
  }
}

export default Header
        // <h1><Link to={'/todos'}>React Todos</Link></h1>
