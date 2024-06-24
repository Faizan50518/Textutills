import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.tab1}</a>
        </li>
       {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>*/}
       
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?"Enable light mode" : "Enable dark mode "}</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    tab1 : PropTypes.string,
};

