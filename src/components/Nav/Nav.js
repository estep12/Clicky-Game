import React from "react";

const Nav = props => (
    <nav className = "navbar navbar-light bg-primary">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="text-center mb-0 h3">{props.headline}</span>
        <span className="navbar-text text-dark font-weight-bold">
          Score:  <span className="badge">{props.correct}</span> | 
          Top Score:  <span className="badge">{props.topScore}</span>
        </span>
    </nav>
)

export default Nav;
